import { useEffect } from "react";

import { Link } from "react-router-dom";


import image from "../../media/photoUpload.jpeg";

import "./Dashboard2.css";

const Dashboard2 = () => {

    useEffect(()=>{
        document.body.style.overflow = "hidden";
    },[1]);

    return <div className="dashboard2">
        <div className="bubbles1">
            <span className="two"></span>
            <span className="three"></span>
            <span className="four"></span>
            <span className="five"></span>
            <span className="six"></span>
            <span className="seven"></span>
        </div>
        <div className="bubbles1">
            <span className="two"></span>
            <span className="three"></span>
            <span className="four"></span>
            <span className="five"></span>
            <span className="six"></span>
            <span className="seven"></span>
        </div>
        <div className="bubbles1">
            <span className="two"></span>
            <span className="three"></span>
            <span className="four"></span>
            <span className="five"></span>
            <span className="six"></span>
            <span className="seven"></span>
        </div>
        <div className="bubbles1">
            <span className="two"></span>
            <span className="three"></span>
            <span className="four"></span>
            <span className="five"></span>
            <span className="six"></span>
            <span className="seven"></span>
        </div>

        <div className="container2">
            <div className="title2">
                Hi, I am Ayush!
            </div>
            <div className="image2">
                <img src={image} />
            </div>
            <div className="links2">
                <Link to="/about"><button >About</button></Link>
                <Link to="/skills"><button >Skills</button></Link>
                <Link to="/projects"><button >Projects</button></Link>
                <Link to="/contact"><button >Contact</button></Link>
            </div>
            
        </div>
    </div>
}

export default Dashboard2;