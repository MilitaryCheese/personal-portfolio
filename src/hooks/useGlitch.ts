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
        filter: 'drop-shadow(3px 0 0 rgba(255,0,0,0.8)) drop-shadow(-3px 0 0 rgba(0,255,255,0.8))'
      })
      .to(element, {
        duration: 0.06,
        ease: 'none',
        filter: 'drop-shadow(-4px 0 0 rgba(255,0,0,0.6)) drop-shadow(4px 0 0 rgba(0,255,255,0.6))'
      })
      .to(element, {
        duration: 0.06,
        ease: 'none',
        filter: 'drop-shadow(2px 0 0 rgba(255,0,0,0.9)) drop-shadow(-2px 0 0 rgba(0,255,255,0.9))'
      })
      .to(element, {
        duration: 0.08,
        ease: 'none',
        filter: 'drop-shadow(-1px 0 0 rgba(255,0,0,0.4)) drop-shadow(1px 0 0 rgba(0,255,255,0.4))'
      })
      .to(element, {
        duration: 0.01,
        ease: 'power2.out',
        filter: 'drop-shadow(0px 0 0 rgba(255,0,0,0)) drop-shadow(0px 0 0 rgba(0,255,255,0))'
      })

  }, [ref])

  return triggerGlitch
}