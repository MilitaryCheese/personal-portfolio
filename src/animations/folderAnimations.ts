import { gsap } from 'gsap'

export function onFolderHover(element: HTMLElement | null) {
  if (!element) return
  gsap.to(element, { scale: 1.05, duration: 0.2, ease: 'power2.out' })
}

export function onFolderLeave(element: HTMLElement | null) {
  if (!element) return
  gsap.to(element, { scale: 1, duration: 0.2, ease: 'power2.out' })
}

export function onFolderClick(element: HTMLElement | null) {
  if (!element) return
  return gsap
    .timeline()
    .to(element, { scale: 0.95, duration: 0.1, ease: 'power2.in' })
    .to(element, { scale: 1.1, duration: 0.1, ease: 'power2.out' })
}

export function exitAllFolders(elements: HTMLElement[], onComplete: () => void) {
  if (elements.length === 0) {
    onComplete()
    return
  }
  gsap.to(elements, {
    opacity: 0,
    y: -20,
    stagger: 0.08,
    duration: 0.3,
    ease: 'power2.in',
    onComplete,
  })
}

export function enterAllFolders(elements: HTMLElement[]) {
  if (elements.length === 0) return
  gsap.fromTo(
    elements,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, stagger: 0.08, duration: 0.3, ease: 'power2.out' },
  )
}

export function typewriterIntro(element: HTMLElement, text: string) {
  const state = { chars: 0 }
  return gsap.to(state, {
    chars: text.length,
    duration: text.length * 0.04,
    ease: 'none',
    onUpdate: () => {
      element.textContent = text.slice(0, Math.round(state.chars))
    },
  })
}
