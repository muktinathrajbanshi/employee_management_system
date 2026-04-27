import { useCallback, useEffect, useState } from "react"
import { dummyEmployeeData } from "../assets/assets"

const Employees = () => {

  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchEmployees = useCallback(async () => {
    setLoading(true)
    setEmployees(dummyEmployeeData)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    fetchEmployees();
  }, [])


  return (
    <div className="animate-fade-in">
      {/* header  */}
      <div className="flex flex-col sm:flex-row justify-between items-start
      sm:items-center gap-4 mb-8">

      </div>
      {/* search bar  */}

      {/* employee cards  */}


    </div>
  )
}

export default Employees
