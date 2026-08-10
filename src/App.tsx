import { useState } from 'react'
import type { Project } from './types'
import LandingScreen from './screens/LandingScreen'
import LoadingScreen from './screens/LoadingScreen'
import AboutOverlay from './screens/AboutOverlay'
import ProjectPanel from './components/project/ProjectPanel'

type ViewState = 'loading' | 'landing' | 'project'

function App() {
  const [view, setView] = useState<ViewState>('landing')
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [showAbout, setShowAbout] = useState(false)

  return (
    <>
      {view === 'loading' && <LoadingScreen />}
      {view === 'landing' && (
        <LandingScreen
          onProjectSelect={(project) => {
            setActiveProject(project)
            setView('project')
          }}
          onAboutOpen={() => setShowAbout(true)}
        />
      )}
      {view === 'project' && <ProjectPanel project={activeProject} />}
      {showAbout && <AboutOverlay onClose={() => setShowAbout(false)} />}
    </>
  )
}

export default App
