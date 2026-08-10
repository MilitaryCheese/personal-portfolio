import styles from './CRTBackground.module.css'
// import CursorLight from './CursorLight'

const CRTBackground = () => {
  return (
    <div className={styles.crtBackground}>
      <div className="scanlines" />
      {/* <CursorLight /> */}
    </div>
  )
}

export default CRTBackground
