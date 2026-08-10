import { useEffect, useRef } from 'react'
import type { MouseEvent, SyntheticEvent } from 'react'
import styles from './WipDialog.module.css'
import { enterPanel, exitPanel } from '../../animations/panelTransitions'

interface WipDialogLink {
  href: string
  label: string
}

interface WipDialogProps {
  open: boolean
  onClose: () => void
  message: string
  link?: WipDialogLink
}

const WipDialog = ({ open, onClose, message, link }: WipDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    const panel = panelRef.current
    if (!dialog || !panel) return

    if (open) {
      if (!dialog.open) dialog.showModal()
      enterPanel(panel)
    } else if (dialog.open) {
      exitPanel(panel, () => dialog.close())
    }
  }, [open])

  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault()
    onClose()
  }

  const handleDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    // Stop this from bubbling to whatever ancestor rendered the dialog (e.g. a
    // clickable FolderItem card) — otherwise closing the dialog re-triggers
    // the parent's own click handler and immediately reopens it.
    event.stopPropagation()
    if (event.target === dialogRef.current) onClose()
  }

  return (
    <dialog ref={dialogRef} className={styles.dialog} onCancel={handleCancel} onClick={handleDialogClick}>
      <div ref={panelRef} className={styles.panel}>
        <p className={`${styles.message} text-base`}>{message}</p>
        {link && (
          <a href={link.href} target="_blank" rel="noreferrer" className={`${styles.link} text-small`}>
            [ {link.label} ↗ ]
          </a>
        )}
        <button type="button" className={`${styles.closeButton} text-small`} onClick={onClose}>
          [ CLOSE ]
        </button>
      </div>
    </dialog>
  )
}

export default WipDialog
