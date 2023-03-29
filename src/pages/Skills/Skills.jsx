import Nav from "../../component/Navbar/Nav";
import Footer from "../../component/Footer/Footer";
import "./Skills.css";

import { skillsData } from "../../data/data";


const Skills = () =>{

    return <>
    <Nav/>
    <div className="skills">
        <h1>Skills</h1>
        {/* <p>I have huge interest in Data Structures and Algorithms, Graphic designing as well as in UX/UI. I have done various projects also gave the expected result and still couting. While working on project I enjoy each and every process a lot form starting to end and help other people also.</p> */}
        <hr/>
        <hr/>
        {
            skillsData.map((data)=>{
                return <div key={data.name} >
                <h1>{data.name}</h1>
                <p>{data.desc}</p>
                <hr/>
                <br/>
                </div>
            })
        }
    </div>
    <Footer/>
    </>
}

export default Skills;
