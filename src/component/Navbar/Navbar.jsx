import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    return <div className="navbar">
        <div className="nav"><div className="port">PROFILE</div></div>
        <div className="btn2">
        <Link to="/"><button className="btn">Home</button></Link>
        <Link to="/about"><button className="btn">About</button></Link>
        <Link to="/projects"><button className="btn">Projects</button></Link>
        <Link to="/skills"><button className="btn">Skills</button></Link>
        <Link to="/contact"><button className="btn">Contact</button></Link>
        </div>
    </div>
}

export default Navbar;