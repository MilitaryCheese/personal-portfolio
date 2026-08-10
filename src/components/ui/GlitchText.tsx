import { useEffect, useRef } from 'react'
import { useGlitch } from '../../hooks/useGlitch'

interface GlitchTextProps {
  children: string
  trigger: boolean
  className?: string
}

const GlitchText = ({ children, trigger, className }: GlitchTextProps) => {
  const ref = useRef<HTMLSpanElement>(null)
  const triggerGlitch = useGlitch(ref)

  useEffect(() => {
    if (trigger) triggerGlitch()
  }, [trigger, triggerGlitch])

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  )
}

export default GlitchText
