import { useEffect, useRef, useState } from 'react'
import styles from './SystemLog.module.css'

const messages = [
  '// scanning portfolio assets... OK',
  '// user detected. hello.',
  '// loading project data... done',
  '// establishing connection...',
  '// all systems nominal',
]

const VISIBLE_LINES = 5
const CYCLE_INTERVAL_MS = 3500

const SystemLog = () => {
  const [log, setLog] = useState<string[]>([messages[0]])
  const uptimeRef = useRef(0)
  const indexRef = useRef(1)

  useEffect(() => {
    const uptimeTimer = setInterval(() => {
      uptimeRef.current += 1
    }, 1000)
    return () => clearInterval(uptimeTimer)
  }, [])

  useEffect(() => {
    const cycleTimer = setInterval(() => {
      const cyclePosition = indexRef.current % (messages.length + 1)
      const nextLine =
        cyclePosition === messages.length
          ? `// uptime: ${uptimeRef.current}s`
          : messages[cyclePosition]

      setLog((prev) => [...prev, nextLine].slice(-VISIBLE_LINES))
      indexRef.current += 1
    }, CYCLE_INTERVAL_MS)

    return () => clearInterval(cycleTimer)
  }, [])

  return (
    <div className={styles.systemLog}>
      {log.map((line, index) => (
        <p key={index} className={`${styles.line} text-small text-dim`}>
          {line}
        </p>
      ))}
    </div>
  )
}

export default SystemLog
