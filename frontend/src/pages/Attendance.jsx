import { useCallback, useState } from "react"
import { dummyAttendanceData } from "../assets/assets"


const Attendance = () => {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)
  const [isDeleted, setIsDelete] = useState(false)

  const fetchData = useCallback(async () => {
    setHistory(dummyAttendanceData)
    setTimeout(() => {
    setLoading(false)
    }, 1000)
  }, [])

  return (
    <div>
      Attendance
    </div>
  )
}

export default Attendance
