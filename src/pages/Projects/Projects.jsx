import Nav from "../../component/Navbar/Nav";
import Footer from "../../component/Footer/Footer";
import "./Projects.css";

import {projectData, projectData2} from "../../data/data";
import {LINK,LIVE} from "../../data/constData";


const Projects = () =>{


    return <>
    <Nav/>
    <div className="project">
        <h2>Projects</h2>
        Few Projects that I have made are put in here while new projects will be added as soon as it get completed
        <br/>
        <br/>
        <hr/>
        <hr/>
            {
                projectData2.map(({name,link,live,desc}) => {
                    return <div className="pro" key={`${name}`}>
                        <h2>{`${name}`}</h2>
                        <p>{`${desc}`}</p>
                        <div className="link-live">
                            <div className="link"><a href={`${LINK}${link}`} target="_blank"><div className="text">[REPO]</div></a></div>
                            <div className="Live"><a href={`${live}`} target="_blank"><div className="text">[LIVE]</div></a></div>
                        </div>
                        <br/>
                        <hr/>
                    </div>
                })
            }
            {
                projectData.map(({name,link,live,desc}) => {
                    return <div className="pro" key={`${name}`}>
                        <h2>{`${name}`}</h2>
                        <p>{`${desc}`}</p>
                        <div className="link-live">
                            <div className="link"><a href={`${LINK}${link}`} target="_blank"><div className="text">[REPO]</div></a></div>
                            <div className="Live"><a href={`${LIVE}${live}`} target="_blank"><div className="text">[LIVE]</div></a></div>
                        </div>
                        <br/>
                        <hr/>
                    </div>
                })
            }
        

    </div>
    <Footer/>
    </>
}

export default Projects;