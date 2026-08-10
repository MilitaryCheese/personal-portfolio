import { useLiveTime } from '../../hooks/useLiveTime'

const LiveClock = () => {
  const time = useLiveTime()
  return <span>{time}</span>
}

export default LiveClock
