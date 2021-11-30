import { useEffect, useState } from "react"

const Time = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const handleTime = setInterval(() => {
      const d = new Date().toLocaleTimeString()
      setTime(d)
    }, 1000)

    return () => {
      clearInterval(handleTime)
    }
  }, [])

  return <>{time}</>
}

export default Time