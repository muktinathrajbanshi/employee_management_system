import { useCallback, useEffect, useState } from "react"
import { dummyLeaveData } from "../assets/assets"
import Loading from "../components/Loading"

const Leave = () => {

  const [leaves, setLeaves] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)
  const isAdmin = false;

  const fetchLeaves = useCallback(() => {
    setLeaves(dummyLeaveData)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])

  useEffect(() => {
    fetchLeaves()
  }, [fetchLeaves])

  if(loading) return <Loading />

  const approvedLeaves = leaves.filter((l) => l.status === "APPROVED");
  const sickCount = approvedLeaves.filter((l) => l.type === "SICK").length;


  return (
    <div>
      Leave
    </div>
  )
}

export default Leave
