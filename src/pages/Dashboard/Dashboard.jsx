import { useEffect } from "react";

import { Link } from "react-router-dom";

import image from "../../media/photoUpload.jpeg";

import "./Dashboard.css";

const Dashboard = () => {

    useEffect(()=>{
        document.body.style.overflow = "hidden";
    },[1]);

    return <div className="dashboard1">
        <div className="bubbles">
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
            <span className="four"></span>
            <span className="five"></span>
            <span className="six"></span>
            <span className="seven"></span>
            <span className="seven"></span>
        </div>
        <div className="bubbles">
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
            <span className="four"></span>
            <span className="five"></span>
            <span className="six"></span>
            <span className="seven"></span>
            <span className="seven"></span>
        </div>
        <div className="bubbles">
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
            <span className="four"></span>
            <span className="five"></span>
            <span className="six"></span>
            <span className="seven"></span>
            <span className="seven"></span>
        </div>
        <div className="bubbles">
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
            <span className="four"></span>
            <span className="five"></span>
            <span className="six"></span>
            <span className="seven"></span>
            <span className="seven"></span>
        </div>

        <div className="container">
            <div className="title">
                Hi, I am Ayush!
            </div>
            <div className="stuff">
                <div className="links">
                    <Link to="/about"><button >About</button></Link>
                    <Link to="/skills"><button >Skills</button></Link>
                    <Link to="/projects"><button >Projects</button></Link>
                    <Link to="/contact"><button >Contact</button></Link>

                </div>
                <div className="image">
                    <img src={image} />
                </div>
            </div>
        </div>
        
    </div>
}

export default Dashboard;