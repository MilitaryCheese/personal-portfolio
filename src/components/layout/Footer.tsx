import { useRef, useState } from 'react'
import styles from './Footer.module.css'
import LiveClock from '../ui/LiveClock'
import WipDialog from '../ui/WipDialog'
import { useGlitch } from '../../hooks/useGlitch'

interface FooterProps {
  onAboutOpen: () => void
}

const Footer = ({ onAboutOpen }: FooterProps) => {
  const aboutRef = useRef<HTMLSpanElement>(null)
  const triggerAboutGlitch = useGlitch(aboutRef)
  const [showWipDialog, setShowWipDialog] = useState(false)

  const handleAboutClick = () => {
    setShowWipDialog(true)
    return
    onAboutOpen()
  }

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
        onClick={handleAboutClick}
      >
        [ ABOUT ]
      </span>
      <WipDialog
        open={showWipDialog}
        onClose={() => setShowWipDialog(false)}
        message="still a work in progress, I'll have more soon in a hot sec. just fyi that this portfolio wasn't vibe coded, it started with a legit figma file because i had a lot of opinions about how i wanted my portfolio to look like. im also a big fan of gsap and took the liberty to add a lot of animations and effects that i thought would be fun to implement :3 hope you enjoy it x"
      />
    </footer>
  )
}

export default Footer
