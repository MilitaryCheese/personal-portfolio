import { useEffect, useRef } from 'react'
import type { MouseEvent, SyntheticEvent } from 'react'
import styles from './AboutOverlay.module.css'
import ProjectSection from '../components/project/ProjectSection'
import { enterPanel, exitPanel } from '../animations/panelTransitions'
import { about } from '../data/about'

interface AboutOverlayProps {
  onClose: () => void
}

const AboutOverlay = ({ onClose }: AboutOverlayProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    const panel = panelRef.current
    if (!dialog || !panel) return
    dialog.showModal()
    enterPanel(panel)
  }, [])

  const handleClose = () => {
    const dialog = dialogRef.current
    const panel = panelRef.current
    if (!dialog || !panel) {
      onClose()
      return
    }
    exitPanel(panel, () => {
      dialog.close()
      onClose()
    })
  }

  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault()
    handleClose()
  }

  const handleDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    event.stopPropagation()
    if (event.target === dialogRef.current) handleClose()
  }

  return (
    <dialog ref={dialogRef} className={styles.dialog} onCancel={handleCancel} onClick={handleDialogClick}>
      <div ref={panelRef} className={styles.panel}>
        <section className={styles.intro}>
          <div className={styles.photoColumn}>

            <p className={`${styles.name} text-base`}>{about.name}</p>
            {about.photo ? (
              <img src={about.photo} alt={about.name} className={styles.photo} />
            ) : (
              <div className={`${styles.photoFallback} text-small text-dim`}>[ PHOTO ]</div>
            )}
          </div>
          <div className={styles.availabilityColumn}>
            <p className="text-small text-dim">// CURRENTLY OPEN TO</p>
            <p className="text-base">{about.availability}</p>
          </div>
        </section>

        <hr className={styles.divider} />

        <ProjectSection heading="TECH STACK">
          <div>
            {about.techStack.map((group) => (
              <div key={group.category} className={styles.stackRow}>
                <span className={`${styles.stackCategory} text-small text-dim`}>{group.category}:</span>
                <span className="text-base">{group.items.join(' · ')}</span>
              </div>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection heading="EXPERIENCE">
          <div>
            {about.experience.map((job) => (
              <div key={`${job.company}-${job.years}`} className={styles.job}>
                <p className={`${styles.jobHeader} text-base`}>
                  {job.company} · {job.role} · {job.years}
                </p>
                <ul className={styles.list}>
                  {job.highlights.map((item) => (
                    <li key={item} className="text-base">
                      — {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ProjectSection>

        <footer className={styles.footer}>
          {about.contact.map((item) => (
            <a
              key={item.value}
              href={item.href}
              target={item.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              className={`${styles.link} text-small`}
            >
              {item.value}
            </a>
          ))}
        </footer>

        <button type="button" className={`${styles.closeButton} text-small`} onClick={handleClose}>
          // [ CLOSE ]
        </button>
      </div>
    </dialog>
  )
}

export default AboutOverlay
