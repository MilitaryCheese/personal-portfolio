import { useCallback } from 'react'
import { gsap } from 'gsap'
import type { RefObject } from 'react'

export function useGlitch<T extends HTMLElement>(ref: RefObject<T | null>) {
  const triggerGlitch = useCallback(() => {
    const element = ref.current
    if (!element) return

    gsap.timeline()
      .to(element, {
        duration: 0.08,
        ease: 'none',
        textShadow: '3px 0 0 rgba(255,0,0,0.8), -3px 0 0 rgba(0,255,255,0.8)'
      })
      .to(element, {
        duration: 0.06,
        ease: 'none',
        textShadow: '-4px 0 0 rgba(255,0,0,0.6), 4px 0 0 rgba(0,255,255,0.6)'
      })
      .to(element, {
        duration: 0.06,
        ease: 'none',
        textShadow: '2px 0 0 rgba(255,0,0,0.9), -2px 0 0 rgba(0,255,255,0.9)'
      })
      .to(element, {
        duration: 0.08,
        ease: 'none',
        textShadow: '-1px 0 0 rgba(255,0,0,0.4), 1px 0 0 rgba(0,255,255,0.4)'
      })
      .to(element, {
        duration: 0.1,
        ease: 'power2.out',
        textShadow: '0px 0 0 rgba(255,0,0,0), 0px 0 0 rgba(0,255,255,0)'
      })

  }, [ref])

  return triggerGlitch
}