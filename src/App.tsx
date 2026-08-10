import { useState } from 'react'
import type { Project } from './types'
import LandingScreen from './screens/LandingScreen'
import AboutOverlay from './screens/AboutOverlay'

type ViewState = 'landing' | 'project'

function App() {
  const [view, setView] = useState<ViewState>('landing')
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [showAbout, setShowAbout] = useState(false)

  return (
    <>
      <LandingScreen
        view={view}
        activeProject={activeProject}
        onProjectSelect={(project) => {
          setActiveProject(project)
          setView('project')
        }}
        onProjectClose={() => {
          setView('landing')
          setActiveProject(null)
        }}
        onAboutOpen={() => setShowAbout(true)}
      />
      {showAbout && <AboutOverlay onClose={() => setShowAbout(false)} />}
    </>
  )
}

export default App
