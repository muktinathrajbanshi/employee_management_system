import { useCallback, useEffect, useState } from "react"
import { dummyAttendanceData } from "../assets/assets"
import Loading from "../components/Loading"


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

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  if (loading) return <Loading />

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const todayRecord = history.find((r) => new Date(r.date))

  return (
    <div>
      Attendance
    </div>
  )
}

export default Attendance
