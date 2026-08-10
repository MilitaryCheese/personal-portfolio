import { useCallback } from 'react'
import { gsap } from 'gsap'
import type { RefObject } from 'react'

export function useGlitch<T extends HTMLElement>(ref: RefObject<T | null>) {
  const triggerGlitch = useCallback(() => {
    const element = ref.current
    if (!element) return

    gsap
      .timeline()
      .to(element, { skewX: -8, x: -3, opacity: 0.6, duration: 0.08, ease: 'power1.inOut' })
      .to(element, { skewX: 6, x: 3, opacity: 1, duration: 0.08, ease: 'power1.inOut' })
      .to(element, { skewX: -4, x: -2, opacity: 0.7, duration: 0.08, ease: 'power1.inOut' })
      .to(element, { skewX: 2, x: 1, opacity: 1, duration: 0.08, ease: 'power1.inOut' })
      .to(element, { skewX: 0, x: 0, opacity: 1, duration: 0.08, ease: 'power1.inOut' })
  }, [ref])

  return triggerGlitch
}
