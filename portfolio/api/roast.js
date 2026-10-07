// Vercel serverless function — powers the "Get Roasted" demo on the portfolio.
// A trimmed-down version of Roastly's API: same schema, same guardrails, no extension required.
import Anthropic from '@anthropic-ai/sdk'
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod'
import { z } from 'zod'

const MAX_CODE_LENGTH = 4000 // characters — smaller than Roastly's cap, this is a public demo
const WINDOW_MS = 15 * 60 * 1000
const MAX_PER_WINDOW = 5

// Mirrors Roastly's shared RoastResult schema
const RoastResult = z.object({
  roast: z.string(),
  score: z.number(),
  findings: z
    .array(
      z.object({
        severity: z.enum(['low', 'medium', 'high', 'critical']),
        line: z.number().optional(),
        issue: z.string(),
        roastLine: z.string(),
        fix: z.string(),
      }),
    ),
})

// Best-effort per-IP limit. Lives per warm instance, so it's a speed bump, not a wall —
// the real cost ceiling is the spend limit on the API key.
const hits = new Map()
function rateLimited(ip) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}

const client = new Anthropic() // reads ANTHROPIC_API_KEY

const PROMPT = `You are Roastly — a savage-but-brilliant senior engineer who roasts code and helps the developer behind it get better.

Return:
- roast: a punchy, funny, 2–3 sentence verdict on the code as a whole
- score: 0-100 holistic code quality
- findings: up to 5 of the most important issues, each with severity, line (if applicable, 1-indexed), issue (plain and professional), roastLine (one witty burn about the code, never the person), and fix (what to change, in words)

Keep the jokes in roast and roastLine only. If the input isn't code, roast them for that instead and return no findings.

Code:
`

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'POST only.' })
  }

  const { code } = req.body || {}
  if (typeof code !== 'string' || !code.trim()) {
    return res.status(400).json({ error: 'Paste some code first.' })
  }
  if (code.length > MAX_CODE_LENGTH) {
    return res.status(413).json({ error: `Keep it under ${MAX_CODE_LENGTH} characters.` })
  }

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown'
  if (rateLimited(ip)) {
    return res.status(429).json({ error: 'You’ve been roasted enough. Try again in a few minutes.' })
  }

  try {
    const response = await client.messages.parse(
      {
        model: process.env.ROAST_MODEL || 'claude-opus-5-5',
        max_tokens: 4000,
        output_config: { effort: 'low', format: zodOutputFormat(RoastResult) },
        fallbacks: 'default', // re-run on a fallback model if the request is declined
        messages: [{ role: 'user', content: PROMPT + code }],
      },
      { timeout: 30_000, headers: { 'anthropic-beta': 'server-side-fallback-2026-07-01' } },
    )

    if (response.stop_reason === 'refusal' || !response.parsed_output) {
      return res.status(422).json({ error: 'Even Roastly won’t touch that one. Try different code.' })
    }
    // Clamp here rather than in the schema — a 101 shouldn't fail the whole roast
    const { roast, score, findings } = response.parsed_output
    return res.status(200).json({
      roast,
      score: Math.max(0, Math.min(100, Math.round(score))),
      findings: findings.slice(0, 5),
    })
  } catch (err) {
    console.error(err)
    if (err instanceof Anthropic.RateLimitError) {
      return res.status(429).json({ error: 'Roastly is overheated. Try again in a minute.' })
    }
    return res.status(502).json({ error: 'The roast fell flat. Try again.' })
  }
}
