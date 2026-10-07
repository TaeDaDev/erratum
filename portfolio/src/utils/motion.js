// Respect the OS-level "reduce motion" setting — skip entrance animations and freeze the hero.
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
