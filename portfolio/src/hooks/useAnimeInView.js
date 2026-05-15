import { useEffect } from 'react'

export function useAnimeInView(ref, animateFn, options = {}) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateFn(el)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '-100px', ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
}
