import Navbar from "../components/Navbar"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Login from "./Login"
import Register from "./Register"
import Contact from "./Contact"
import { AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
