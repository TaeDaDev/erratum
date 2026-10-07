import { useRef, useState } from 'react'
import { createTimeline, stagger } from 'animejs'
import { useAnimeInView } from '../hooks/useAnimeInView'
import '../styles/RoastDemo.css'

const MAX_CHARS = 4000

const SAMPLE = `function getData(id) {
  var result;
  fetch('/api/users/' + id).then(res => {
    result = res.json();
  });
  return result;
}`

function scoreVerdict(score) {
  if (score >= 85) return 'Annoyingly good'
  if (score >= 65) return 'Lightly toasted'
  if (score >= 40) return 'Well done'
  return 'Burnt to a crisp'
}

export default function RoastDemo() {
  const ref = useRef(null)
  const [code, setCode] = useState(SAMPLE)
  const [status, setStatus] = useState('idle') // idle | loading | done | error
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  useAnimeInView(ref, (el) => {
    const tl = createTimeline({ ease: 'outExpo' })
    tl.add(el.querySelector('.section-label'), {
      letterSpacing: ['12px', '3px'],
      opacity: [0, 0.35],
      duration: 700,
    })
    .add(el.querySelectorAll('.roast-demo'), {
      translateY: [40, 0],
      opacity: [0, 1],
      duration: 900,
      delay: stagger(120),
    }, '+=100')
  })

  async function handleSubmit(e) {
    e.preventDefault()
    if (!code.trim() || status === 'loading') return
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/roast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'The roast fell flat. Try again.')
      setResult(data)
      setStatus('done')
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  return (
    <section id="roast" className="roast" ref={ref}>
      <div className="roast-inner">
        <span className="section-label">Get Roasted</span>
        <div className="roast-demo roast-intro">
          <h2 className="roast-heading">Paste code. Get humbled.</h2>
          <p>
            A live, trimmed-down version of <a href="https://github.com/TaeDaDev/roastly" target="_blank" rel="noreferrer">Roastly</a>.
            Claude scores your snippet, roasts it, then tells you how to fix it. Don't paste secrets.
          </p>
        </div>

        <div className="roast-demo roast-panel">
          <form onSubmit={handleSubmit} className="roast-form">
            <label htmlFor="roast-code" className="visually-hidden">Code to roast</label>
            <textarea
              id="roast-code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              maxLength={MAX_CHARS}
              spellCheck={false}
              rows={10}
            />
            <div className="roast-form-footer">
              <span className="roast-count">{code.length} / {MAX_CHARS}</span>
              <button type="submit" disabled={status === 'loading' || !code.trim()}>
                {status === 'loading' ? 'Heating up…' : 'Roast it 🔥'}
              </button>
            </div>
          </form>

          <div className="roast-output" aria-live="polite">
            {status === 'idle' && (
              <p className="roast-placeholder">Your roast will appear here. The sample on the left has a classic async bug. Can you spot it before Claude does?</p>
            )}
            {status === 'loading' && <p className="roast-placeholder roast-pulse">Reading your code. Judging silently…</p>}
            {status === 'error' && <p className="roast-error">{error}</p>}
            {status === 'done' && result && (
              <>
                <div className="roast-score">
                  <span className="roast-score-num">{result.score}</span>
                  <span className="roast-score-label">/ 100 · {scoreVerdict(result.score)}</span>
                </div>
                <p className="roast-verdict">{result.roast}</p>
                {result.findings.length > 0 && (
                  <ul className="roast-findings">
                    {result.findings.map((f, i) => (
                      <li key={i}>
                        <span className={`roast-sev roast-sev--${f.severity}`}>
                          {f.severity}{f.line ? ` · L${f.line}` : ''}
                        </span>
                        <p className="roast-line">“{f.roastLine}”</p>
                        <p className="roast-fix"><strong>Fix:</strong> {f.fix}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
