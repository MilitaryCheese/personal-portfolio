import { gsap } from 'gsap'

export function enterPanel(element: HTMLElement) {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
  )
}

export function exitPanel(element: HTMLElement, onComplete: () => void) {
  return gsap.to(element, {
    opacity: 0,
    y: -20,
    duration: 0.3,
    ease: 'power2.in',
    onComplete,
  })
}
