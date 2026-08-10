import { useEffect, useRef } from 'react'
import { initBlinkingCursor } from '../../animations/crtEffects'

interface BlinkingCursorProps {
  className?: string
}

const BlinkingCursor = ({ className }: BlinkingCursorProps) => {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const tween = initBlinkingCursor(ref.current)
    return () => {
      tween.kill()
    }
  }, [])

  return (
    <span ref={ref} className={className}>
      _
    </span>
  )
}

export default BlinkingCursor
