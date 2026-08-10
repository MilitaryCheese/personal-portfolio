import styles from './Header.module.css'
import BlinkingCursor from '../ui/BlinkingCursor'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={`${styles.title} text-large`}>
        &gt; portfolio
        <BlinkingCursor className={styles.cursor} />
      </h1>
      <p className={`${styles.subtitle} text-small text-dim`}>[ of // kesh ]</p>
    </header>
  )
}

export default Header
