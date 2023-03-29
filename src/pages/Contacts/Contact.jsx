
import Nav from "../../component/Navbar/Nav";
import Footer from "../../component/Footer/Footer";
import './Contact.css';
import git from '../../media/git_image.png';
import lkd from '../../media/linkedin_image.png'

const Contact = ()=>{



    return <>
    <Nav/>
    <div className="connect">
        <div className="btn4">
            <a href="https://github.com/ayushkv001" target="_blank"><div className="cnt"><img className="gi" src={git} /> <div className="git">GitHub</div></div></a>
            <a href="https://linkedin.com/in/ayushkv001" target="_blank"><div className="cnt"><img className="lk" src={lkd}/> <div className="lin">LinkedIn</div></div></a>
        </div>
    </div>
    </>
}

export default Contact;