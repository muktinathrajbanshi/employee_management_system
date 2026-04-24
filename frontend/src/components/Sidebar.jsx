import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { dummyProfileData } from "../assets/assets"
import { MenuIcon } from "lucide-react"

const Sidebar = () => {

    const { pathname } = useLocation()
    const [userName, setUserName] = useState("")
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName)
    }, [])

    // Close mobile sidebar on route change
    useEffect(() => {
       setMobileOpen(false)
    }, [pathname])

  return (
    <>
      {/* Mobile hamburger button  */}
      <button className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg
      shadow-lg border border-white/10">
        <MenuIcon size={20} />
      </button>
    </>
  )
}

export default Sidebar
