import { useRef } from 'react'
import styles from './Footer.module.css'
import LiveClock from '../ui/LiveClock'
import { useGlitch } from '../../hooks/useGlitch'

const Footer = () => {
  const aboutRef = useRef<HTMLSpanElement>(null)
  const triggerAboutGlitch = useGlitch(aboutRef)

  return (
    <footer className={styles.footer}>
      <p className={`${styles.credit} text-small text-dim`}>developed by yours truly &lt;3</p>
      <div id="live-clock" className={`${styles.clock} text-small`}>
        <LiveClock />
      </div>
      <span
        ref={aboutRef}
        className={styles.aboutLink}
        onMouseEnter={() => triggerAboutGlitch()}
      >
        [ ABOUT ]
      </span>
    </footer>
  )
}

export default Footer
