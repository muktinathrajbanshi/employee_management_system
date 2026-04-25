import { useEffect, useState } from "react"
import { dummyEmployeeDashboardData } from "../assets/assets"

const Dashboard = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setData(dummyEmployeeDashboardData)

    setTimeout(() => {
      setLoading(false)
    }, 1000)

  }, [])

  if(loading) return <p>Loading</p>
  if(!loading) return <p>Failed to load dashboard</p>
  

  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard
