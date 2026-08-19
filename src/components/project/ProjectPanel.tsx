import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { MouseEvent as ReactMouseEvent, FocusEvent as ReactFocusEvent } from 'react'
import type { Project } from '../../types'
import styles from './ProjectPanel.module.css'
import ProjectSection from './ProjectSection'
import { enterPanel, exitPanel } from '../../animations/panelTransitions'
import { pushSystemLogMessage } from '../ui/SystemLog'
import { useGlitch } from '../../hooks/useGlitch'

export interface ProjectPanelHandle {
  close: () => void
}

interface ProjectPanelProps {
  project: Project | null
  onClose: () => void
}

const STATUS_DOT_CLASS: Record<Project['status'], string> = {
  live: styles['status-live'],
  'in development': styles['status-in-development'],
  archived: styles['status-archived'],
}

const ProjectPanel = forwardRef<ProjectPanelHandle, ProjectPanelProps>(({ project, onClose }, ref) => {
  const panelRef = useRef<HTMLDivElement | null>(null)
  const backButtonRef = useRef<HTMLButtonElement>(null)
  const triggerBackGlitch = useGlitch(backButtonRef)
  const [hoveredTag, setHoveredTag] = useState<{ tech: string; rect: DOMRect } | null>(null)

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

  const handleTagShow = (tech: string, event: ReactMouseEvent<HTMLLIElement> | ReactFocusEvent<HTMLLIElement>) => {
    setHoveredTag({ tech, rect: event.currentTarget.getBoundingClientRect() })
  }

  const handleTagHide = () => {
    setHoveredTag(null)
  }

  useImperativeHandle(ref, () => ({ close: handleClose }))

  if (!project) return null

  return (
    <div className={styles.panelWrapper}>
      <div ref={panelRef} className={styles.panel}>
        <div className={styles.leftContent}>
          <p className={`${styles.logline} text-base`}>{project.logline}</p>



          <ProjectSection heading="SCREENSHOT">
            {project.thumbnail ? (
              <img src={project.thumbnail} alt={`${project.name} screenshot`} className={styles.thumbnail} />
            ) : (
              <div className={`${styles.thumbnailFallback} text-small text-dim`}>[ NO PREVIEW AVAILABLE ]</div>
            )}
          </ProjectSection>

          <ProjectSection heading="KEY PATTERNS">
            <ul className={styles.list}>
              {project.keyPatterns.map((pattern) => (
              <li key={pattern} className="text-base">
                — {pattern}
              </li>
            ))}
            </ul>
          </ProjectSection>

          <ProjectSection heading="ORIGIN">
            <p className="text-base">{project.origin}</p>
          </ProjectSection>

          <ProjectSection heading="APPROACH">
            <p className="text-base">{project.approach}</p>
          </ProjectSection>

          <ProjectSection heading="ARCHITECTURE">
            <p className="text-base">{project.architectureNote}</p>
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

          <ProjectSection heading="IF I REBUILT THIS">
            <ul className={styles.list}>
              {project.ifIRebuiltThis.map((item) => (
                <li key={item} className="text-base">
                  — {item}
                </li>
              ))}
            </ul>
          </ProjectSection>

          <ProjectSection heading="CHALLENGES">
            <div className={styles.list}>
              {project.challenges.map((item) => (
                <p key={item} className="text-base">
                  {item}
                </p>
              ))}
            </div>
          </ProjectSection>

          <ProjectSection heading="WHAT PEOPLE SAID">
            <ul className={styles.list}>
              {project.whatPeopleSaid.map((quote) => (
                <li key={quote} className="text-base">
                  "{quote}"
                </li>
              ))}
            </ul>
          </ProjectSection>

          <button
            ref={backButtonRef}
            type="button"
            className={`${styles.backButton} text-small`}
            onMouseEnter={() => triggerBackGlitch()}
            onClick={handleClose}
          >
            // [ BACK OR PRESS ESC ]
          </button>
        </div>

        <aside className={styles.rightSidebar}>
          <p className={`${styles.codename} text-small text-dim`}>// {project.codename}</p>
          <h2 className={`${styles.name} text-large`}>{project.name}</h2>

          <div className={styles.status}>
            <span className={`${styles.statusDot} ${STATUS_DOT_CLASS[project.status]}`} />
            <span className="text-small">{project.status}</span>
          </div>

          <span className={`${styles.roleTag} text-small`}>[ {project.roleType} ]</span>

          <hr className={styles.divider} />

          <div className={styles.links}>
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className={`${styles.link} text-small`}>
              [ DEMO ↗ ]
            </a>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className={`${styles.link} text-small`}>
              [ GITHUB ↗ ]
            </a>
          </div>

          <hr className={styles.divider} />

          <p className={`${styles.sidebarHeading} text-small text-dim`}>// STACK (hover for reasoning)</p>
          <ul className={styles.stackList}>
            {project.stack.map((tech) => (
              <li
                key={tech}
                className={styles.tag}
                tabIndex={0}
                onMouseEnter={(event) => handleTagShow(tech, event)}
                onMouseLeave={handleTagHide}
                onFocus={(event) => handleTagShow(tech, event)}
                onBlur={handleTagHide}
              >
                {tech}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {hoveredTag &&
        createPortal(
          <div
            className={`${styles.tooltip} text-small`}
            style={{
              position: 'fixed',
              top: hoveredTag.rect.top - 8,
              left: hoveredTag.rect.left + hoveredTag.rect.width / 2,
              transform: 'translate(-50%, -100%)',
            }}
          >
            {project.stackReasoning[hoveredTag.tech]}
          </div>,
          document.body,
        )}
    </div>
  )
})

ProjectPanel.displayName = 'ProjectPanel'

export default ProjectPanel
