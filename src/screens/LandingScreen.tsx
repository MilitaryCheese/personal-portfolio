import { useEffect, useRef } from 'react'
import type { Project } from '../types'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import CRTBackground from '../components/ui/CRTBackground'
import SystemLog from '../components/ui/SystemLog'
import FolderGrid from '../components/landing/FolderGrid'
import ProjectPanel from '../components/project/ProjectPanel'
import type { ProjectPanelHandle } from '../components/project/ProjectPanel'
import { useCursorPosition } from '../hooks/useCursorPosition'
import { triggerAllGlitches } from '../hooks/glitchRegistry'
import { initCRTAmbient } from '../animations/crtEffects'
import styles from './LandingScreen.module.css'

type ViewState = 'landing' | 'project'

interface LandingScreenProps {
  view: ViewState
  activeProject: Project | null
  onProjectSelect: (project: Project) => void
  onProjectClose: () => void
  onAboutOpen: () => void
}

const LandingScreen = ({
  view,
  activeProject,
  onProjectSelect,
  onProjectClose,
  onAboutOpen,
}: LandingScreenProps) => {
  useCursorPosition()
  const panelRef = useRef<ProjectPanelHandle>(null)

  useEffect(() => {
    const ambient = initCRTAmbient()
    return () => {
      ambient.kill()
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && view === 'project') {
        panelRef.current?.close()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [view])

  useEffect(() => {
  if (!window.matchMedia('(hover: none)').matches) return

  let timeoutId: ReturnType<typeof setTimeout>

  const scheduleNext = () => {
    const delay = 2000 + Math.random() * 3000
    timeoutId = setTimeout(() => {
      triggerAllGlitches()
      scheduleNext()
    }, delay)
  }

  scheduleNext()

  return () => clearTimeout(timeoutId)
}, [])

  return (
    <div className={styles.landingScreen}>
      <CRTBackground />
      <Header />
      <main className={styles.main}>
        {view === 'landing' && <FolderGrid onProjectSelect={onProjectSelect} />}
        {view === 'project' && (
          <ProjectPanel ref={panelRef} project={activeProject} onClose={onProjectClose} />
        )}
      </main>
      <SystemLog />
      <Footer onAboutOpen={onAboutOpen} />
    </div>
  )
}

export default LandingScreen
