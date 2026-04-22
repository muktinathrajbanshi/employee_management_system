import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import LoginLanding from "./pages/LoginLanding"
import Layout from "./pages/Layout"
import Dashboard from "./pages/Dashboard"
import Employees from "./pages/Employees"


const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<LoginLanding />}/>
        <Route element={<Layout />}/>
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/employees" element={<Employees />} />
         <Route path="/attendance" element={<Dashboard />} />
         <Route path="/leave" element={<Dashboard />} />
         <Route path="/payslips" element={<Dashboard />} />
         <Route path="/settings" element={<Dashboard />} />


      </Routes>
    </>
  )
}

export default App
