import { gsap } from 'gsap'

export function initCRTAmbient() {
  gsap.set(document.documentElement, { '--scanline-opacity': 0.15 })

  const timeline = gsap.timeline({ repeat: -1, yoyo: true })
  timeline.to(document.documentElement, {
    '--scanline-opacity': 0.22,
    duration: 4,
    ease: 'sine.inOut',
  })

  return timeline
}

export function initBlinkingCursor(element: HTMLElement) {
  return gsap.to(element, {
    opacity: 0,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
  })
}
