import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/services">Services</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </ul>

            <ul>
                <NavLink className="nav-link" to="/login">Login</NavLink>
                <div className="nav-link">|</div>
                <NavLink className="nav-link" to="/register">Register</NavLink>
            </ul>
        </nav> 
    )
}

export default Navbar