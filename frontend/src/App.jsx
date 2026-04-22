import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import LoginLanding from "./pages/LoginLanding"
import Layout from "./pages/Layout"


const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<LoginLanding />}/>
        <Route element={<Layout />}/>

      </Routes>
    </>
  )
}

export default App
