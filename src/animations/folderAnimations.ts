import { gsap } from 'gsap'

export function onFolderHover(element: HTMLElement | null) {
  if (!element) return
  gsap.to(element, {
    scale: 1.08,
    //boxShadow: '0 0 24px rgba(0, 255, 65, 0.4)',
    duration: 0.3,
    ease: 'power2.out',
  })
}

export function onFolderLeave(element: HTMLElement | null) {
  if (!element) return
  gsap.to(element, {
    scale: 1,
    boxShadow: '0 0 0px rgba(0, 255, 65, 0)',
    duration: 0.3,
    ease: 'power2.out',
  })
}

export function onFolderClick(element: HTMLElement | null, onComplete: () => void) {
  if (!element) {
    onComplete()
    return
  }
  gsap.to(element, {
    scale: 0.92,
    duration: 0.15,
    ease: 'power2.out',
    onComplete,
  })
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
