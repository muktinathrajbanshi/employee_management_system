import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import LoginLanding from "./pages/LoginLanding"
import Layout from "./pages/Layout"
import Dashboard from "./pages/Dashboard"


const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<LoginLanding />}/>
        <Route element={<Layout />}/>
         <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
