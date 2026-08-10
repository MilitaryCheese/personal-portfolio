import { useRef, useState } from 'react'
import styles from './FolderItem.module.css'
import GlitchText from '../ui/GlitchText'
import { useGlitch } from '../../hooks/useGlitch'
import { onFolderClick, onFolderHover, onFolderLeave } from '../../animations/folderAnimations'
import type { Project } from '../../types'

interface FolderItemProps {
  project: Project
  registerRef: (element: HTMLDivElement | null) => void
  onSelect: (project: Project) => void
}

const FolderItem = ({ project, registerRef, onSelect }: FolderItemProps) => {
  const itemRef = useRef<HTMLDivElement | null>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const [isGlitching, setIsGlitching] = useState(false)
  const triggerIconGlitch = useGlitch(iconRef)

  const setRefs = (element: HTMLDivElement | null) => {
    itemRef.current = element
    registerRef(element)
  }

  const handleMouseEnter = () => {
    setIsGlitching(true)
    triggerIconGlitch()
    onFolderHover(itemRef.current)
  }

  const handleMouseLeave = () => {
    setIsGlitching(false)
    onFolderLeave(itemRef.current)
  }

  const handleClick = () => {
    onFolderClick(itemRef.current)
    onSelect(project)
  }

  return (
    <div
      ref={setRefs}
      className={styles.folderItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div ref={iconRef} className={styles.icon} aria-hidden="true">
        <svg className={styles.iconSvg} viewBox="0 0 24 20" focusable="false">
          <path d="M1 3a2 2 0 0 1 2-2h5.17a2 2 0 0 1 1.41.59L11 3h10a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3z" />
        </svg>
      </div>
      <GlitchText trigger={isGlitching} className={`${styles.displayName} text-base`}>
        {project.displayName}
      </GlitchText>
    </div>
  )
}

export default FolderItem
