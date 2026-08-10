import { useEffect, useRef } from 'react'
import styles from './FolderGrid.module.css'
import FolderItem from './FolderItem'
import BlinkingCursor from '../ui/BlinkingCursor'
import { projects } from '../../data/projects'
import { enterAllFolders, exitAllFolders, typewriterIntro } from '../../animations/folderAnimations'
import type { Project } from '../../types'

const PROMPT_TEXT = '> SELECT A PROJECT TO INITIALIZE'

interface FolderGridProps {
  onProjectSelect: (project: Project) => void
}

const FolderGrid = ({ onProjectSelect }: FolderGridProps) => {
  const promptRef = useRef<HTMLSpanElement>(null)
  const folderRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!promptRef.current) return
    const tween = typewriterIntro(promptRef.current, PROMPT_TEXT)
    return () => {
      tween.kill()
    }
  }, [])

  useEffect(() => {
    const elements = folderRefs.current.filter((el): el is HTMLDivElement => el !== null)
    enterAllFolders(elements)
  }, [])

  const handleSelect = (project: Project) => {
    const elements = folderRefs.current.filter((el): el is HTMLDivElement => el !== null)
    exitAllFolders(elements, () => onProjectSelect(project))
  }

  return (
    <div className={styles.wrapper}>
      <p className={`${styles.prompt} text-base`}>
        <span ref={promptRef} />
        <BlinkingCursor />
      </p>
      <div className={styles.folderGrid}>
        {projects.map((project, index) => (
          <FolderItem
            key={project.id}
            project={project}
            registerRef={(element) => {
              folderRefs.current[index] = element
            }}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  )
}

export default FolderGrid
