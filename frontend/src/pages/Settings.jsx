import { useEffect, useState } from "react"
import { dummyProfileData } from "../assets/assets"
import Loading from "../components/Loading"

const Settings = () => {

  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showPasswordModal, setShowPasswordModal] = useState(false)

  const fetchProfile = async () => {
    setProfile(dummyProfileData)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  if(loading) return <Loading />

  return (
    <div className="animate-fade-in">
      <div>
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Manage your account and preferences</p>
      </div>
    </div>
  )
}

export default Settings
