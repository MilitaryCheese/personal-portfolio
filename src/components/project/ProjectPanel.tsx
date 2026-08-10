import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import type { Project } from '../../types'
import styles from './ProjectPanel.module.css'
import ProjectSection from './ProjectSection'
import { enterPanel, exitPanel } from '../../animations/panelTransitions'
import { pushSystemLogMessage } from '../ui/SystemLog'

export interface ProjectPanelHandle {
  close: () => void
}

interface ProjectPanelProps {
  project: Project | null
  onClose: () => void
}

const PANIC_LABEL: Record<Project['panicLevel'], string> = {
  low: 'LOW',
  moderate: 'MODERATE',
  high: 'HIGH',
  existential: 'EXISTENTIAL',
}

const ProjectPanel = forwardRef<ProjectPanelHandle, ProjectPanelProps>(({ project, onClose }, ref) => {
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!panelRef.current) return
    enterPanel(panelRef.current)
  }, [])

  const handleClose = () => {
    pushSystemLogMessage('// returning to index...')
    if (!panelRef.current) {
      onClose()
      return
    }
    exitPanel(panelRef.current, onClose)
  }

  useImperativeHandle(ref, () => ({ close: handleClose }))

  if (!project) return null

  return (
    <div className={styles.panelWrapper}>
      <div ref={panelRef} className={styles.panel}>
        <header className={styles.hero}>
          <p className={`${styles.codename} text-small text-dim`}>{project.codename}</p>
          <h2 className={`${styles.name} text-large`}>{project.name}</h2>
          <p className={`${styles.logline} text-base`}>{project.logline}</p>
          <div className={styles.links}>
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className={`${styles.link} text-small`}>
              [ DEMO ↗ ]
            </a>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className={`${styles.link} text-small`}>
              [ GITHUB ↗ ]
            </a>
          </div>
        </header>

        <ProjectSection heading="ORIGIN">
          <p className="text-base">{project.origin}</p>
        </ProjectSection>

        <ProjectSection heading="APPROACH">
          <p className="text-base">{project.approach}</p>
        </ProjectSection>

        <ProjectSection heading="STACK">
          <ul className={styles.stackList}>
            {project.stack.map((tech) => (
              <li key={tech} className={styles.tag}>
                {tech}
                <span className={`${styles.tooltip} text-small`}>{project.stackReasoning[tech]}</span>
              </li>
            ))}
          </ul>
        </ProjectSection>

        <ProjectSection heading="BUILD TIME">
          <p className="text-base">{project.buildTime}</p>
        </ProjectSection>

        <ProjectSection heading="SCREENSHOTS">
          {project.thumbnail ? (
            <img src={project.thumbnail} alt={`${project.name} screenshot`} className={styles.thumbnail} />
          ) : (
            <div className={`${styles.thumbnailFallback} text-small text-dim`}>[ NO PREVIEW AVAILABLE ]</div>
          )}
        </ProjectSection>

        <ProjectSection heading="THINGS I'M PROUD OF">
          <ul className={styles.list}>
            {project.proudOf.map((item) => (
              <li key={item} className="text-base">
                — {item}
              </li>
            ))}
          </ul>
        </ProjectSection>

        <ProjectSection heading="THINGS I DIDN'T FIX">
          <ul className={styles.list}>
            {project.thingsNotFixed.map((item) => (
              <li key={item} className="text-base">
                — {item}
              </li>
            ))}
          </ul>
        </ProjectSection>

        <ProjectSection heading="THE PANIC MOMENT">
          <p className="text-base">{project.panicMoment}</p>
          <p
            className={`${styles.panicLevel} ${styles[`panic-${project.panicLevel}`]} text-small`}
          >
            PANIC LEVEL: {PANIC_LABEL[project.panicLevel]}
          </p>
        </ProjectSection>

        <ProjectSection heading="WHAT MY FRIENDS SAID">
          <ul className={styles.list}>
            {project.friendsFeedback.map((quote) => (
              <li key={quote} className="text-base">
                "{quote}"
              </li>
            ))}
          </ul>
        </ProjectSection>

        <ProjectSection heading="WHAT MY OLD BOSS WOULD SAY">
          <p className="text-base">"{project.oldBossWouldSay}"</p>
          <p className={`${styles.attribution} text-small text-dim`}>— former supervisor, probably</p>
        </ProjectSection>

        <button type="button" className={`${styles.backButton} text-small`} onClick={handleClose}>
          // [ BACK TO PROJECTS ]
        </button>
      </div>
    </div>
  )
})

ProjectPanel.displayName = 'ProjectPanel'

export default ProjectPanel
