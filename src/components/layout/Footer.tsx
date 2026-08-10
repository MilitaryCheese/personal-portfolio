import styles from './Footer.module.css'
import LiveClock from '../ui/LiveClock'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={`${styles.credit} text-small text-dim`}>developed by yours truly &lt;3</p>
      <div id="live-clock" className={`${styles.clock} text-small`}>
        <LiveClock />
      </div>
      <span className={styles.aboutLink}>[ about ]</span>
    </footer>
  )
}

export default Footer
