import { useRef, useState } from 'react'
import styles from './FolderItem.module.css'
import GlitchText from '../ui/GlitchText'
import { onFolderClick, onFolderHover, onFolderLeave } from '../../animations/folderAnimations'

interface FolderItemProps {
  codename: string
  displayName: string
}

const FolderItem = ({ displayName }: FolderItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null)
  const [isGlitching, setIsGlitching] = useState(false)

  const handleMouseEnter = () => {
    setIsGlitching(true)
    onFolderHover(itemRef.current)
  }

  const handleMouseLeave = () => {
    setIsGlitching(false)
    onFolderLeave(itemRef.current)
  }

  const handleClick = () => {
    onFolderClick(itemRef.current, () => {})
  }

  return (
    <div
      ref={itemRef}
      className={styles.folderItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* <span className={`${styles.codename} text-small text-dim`}>{codename}</span> */}
      <div className={styles.icon} aria-hidden="true">
        <svg className={styles.iconSvg} viewBox="0 0 24 20" focusable="false">
          <path d="M1 3a2 2 0 0 1 2-2h5.17a2 2 0 0 1 1.41.59L11 3h10a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3z" />
        </svg>
      </div>
      <GlitchText trigger={isGlitching} className={`${styles.displayName} text-base`}>
        {displayName}
      </GlitchText>
    </div>
  )
}

export default FolderItem
