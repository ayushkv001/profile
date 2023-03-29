


import { Link } from "react-router-dom";

import "./Navbar.css";



const Navbar2 = () => {


  const myFunction= ()=> {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



    return <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<div className="topnav">
  <a className="active port">PROFILE</a>
  <div id="myLinks">
    <Link to="/" className="btn3">Home</Link>
    <Link to="/about"  className="btn3">About</Link>
    <Link to="/projects"  className="btn3">Projects</Link>
    <Link to="/skills"  className="btn3">Skills</Link>
    <Link to="/contact"  className="btn3">Contact</Link>
  </div>
  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
      </div>
    </div>
}

export default Navbar2;