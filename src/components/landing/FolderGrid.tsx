import { useEffect, useRef } from 'react'
import styles from './FolderGrid.module.css'
import FolderItem from './FolderItem'
import BlinkingCursor from '../ui/BlinkingCursor'
import { projects } from '../../data/projects'
import { typewriterIntro } from '../../animations/folderAnimations'

const PROMPT_TEXT = '> SELECT A PROJECT TO INITIALIZE'

const placeholderFolders = [
  { codename: 'PROJECT_01', displayName: 'WEATHERED.APP' },
  { codename: 'PROJECT_02', displayName: 'DRIFTLY.APP' },
  { codename: 'PROJECT_03', displayName: 'PROJECT_03' },
]

const FolderGrid = () => {
  const promptRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!promptRef.current) return
    const tween = typewriterIntro(promptRef.current, PROMPT_TEXT)
    return () => {
      tween.kill()
    }
  }, [])

  const folders =
    projects.length > 0
      ? projects.map((project) => ({ codename: project.codename, displayName: project.displayName }))
      : placeholderFolders

  return (
    <div className={styles.wrapper}>
      <p className={`${styles.prompt} text-base`}>
        <span ref={promptRef} />
        <BlinkingCursor />
      </p>
      <div className={styles.folderGrid}>
        {folders.map((folder) => (
          <FolderItem key={folder.codename} codename={folder.codename} displayName={folder.displayName} />
        ))}
      </div>
    </div>
  )
}

export default FolderGrid
