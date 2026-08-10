import styles from './FolderGrid.module.css'
import FolderItem from './FolderItem'
import { projects } from '../../data/projects'

const placeholderFolders = [
  { codename: 'PROJECT_01', displayName: 'PROJECT_01' },
  { codename: 'PROJECT_02', displayName: 'PROJECT_02' },
  { codename: 'PROJECT_03', displayName: 'PROJECT_03' },
]

const FolderGrid = () => {
  const folders =
    projects.length > 0
      ? projects.map((project) => ({ codename: project.codename, displayName: project.displayName }))
      : placeholderFolders

  return (
    <div className={styles.folderGrid}>
      {folders.map((folder) => (
        <FolderItem key={folder.codename} codename={folder.codename} displayName={folder.displayName} />
      ))}
    </div>
  )
}

export default FolderGrid
