import { useEffect } from 'react'
import type { Project } from '../types'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import CRTBackground from '../components/ui/CRTBackground'
import SystemLog from '../components/ui/SystemLog'
import FolderGrid from '../components/landing/FolderGrid'
import { useCursorPosition } from '../hooks/useCursorPosition'
import { initCRTAmbient } from '../animations/crtEffects'
import styles from './LandingScreen.module.css'

interface LandingScreenProps {
  onProjectSelect: (project: Project) => void
  onAboutOpen: () => void
}

const LandingScreen = (_props: LandingScreenProps) => {
  useCursorPosition()

  useEffect(() => {
    const ambient = initCRTAmbient()
    return () => {
      ambient.kill()
    }
  }, [])

  return (
    <div className={styles.landingScreen}>
      <CRTBackground />
      <Header />
      <main className={styles.main}>
        <FolderGrid />
      </main>
      <SystemLog />
      <Footer />
    </div>
  )
}

export default LandingScreen
