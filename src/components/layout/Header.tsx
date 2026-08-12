import { useRef } from 'react'
import styles from './Header.module.css'
import BlinkingCursor from '../ui/BlinkingCursor'
import { useGlitch } from '../../hooks/useGlitch'

const Header = () => {
  const titleRef = useRef<HTMLSpanElement>(null)
  useGlitch(titleRef)

  return (
    <header className={styles.header}>
      <h1 className={`${styles.title} text-large`}>
        <span ref={titleRef}>&gt; portfolio</span>
        <BlinkingCursor className={styles.cursor} />
      </h1>
      <p className={`${styles.subtitle} text-small text-dim`}>[ of // kesh ]</p>
    </header>
  )
}

export default Header
