const triggers = new Set<() => void>()

export function registerGlitchTrigger(trigger: () => void) {
  triggers.add(trigger)
  return () => {
    triggers.delete(trigger)
  }
}

export function triggerAllGlitches() {
  triggers.forEach((trigger) => trigger())
}
