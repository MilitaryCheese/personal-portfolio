import type { ReactNode } from 'react'
import styles from './ProjectSection.module.css'

interface ProjectSectionProps {
  heading: string
  children: ReactNode
}

const ProjectSection = ({ heading, children }: ProjectSectionProps) => {
  return (
    <section className={styles.section}>
      <h3 className={`${styles.heading} text-small text-dim`}>// {heading}</h3>
      {children}
    </section>
  )
}

export default ProjectSection
