import Navbar from "../components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Login from "./Login"
import Register from "./Register"
import Contact from "./Contact"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
