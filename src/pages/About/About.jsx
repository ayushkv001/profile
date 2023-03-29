

import Nav from '../../component/Navbar/Nav';
import Footer from '../../component/Footer/Footer';


import './About.css';

const About = () =>{

    return <>
        <Nav/>
        <div className='about'>
            <b><h1>About</h1></b>
            <hr/>
            <p className='p1 f2'>Hi, I am <b>Ayush Kumar</b>, a Computer Science and Engineering student currently studying at Madan Mohan Malaviya University of Technology, Gorakhpur. I am a passionate student who loves to learn and explore new things. As a Computer Science student I delve into new technologie to keep myself up-to-date.</p>
            <p className='p2 f2'>I love solving Data structures and Algorithms problems. I have a good knowledge of web development. I have used MERN(MongoDB + Express + React + Node) stack for developing web application as well as I have good knowledge of PHP and its implementation. Apart from web development I have good knowledge of Java and C++. I am also good at problem solving and I am also a quick learner, who grasps concept and knowledge very quickly.</p>
            <p className='f2'>I am currently expanding my knowledge about JavaFX and Android App development.</p>
            <hr/>
            <b><h2>Education</h2></b>
            <ul className='f2'>
                <li>B. Tech. CSE | MMMUT, Gorakhpur</li>
                <li>2019 - 2023</li>
                <li>CGPA : 8.39</li>
                <br/>
                <li>Intermediate (I.C.S.E) | St. Thomas School, Khalilabad </li>
                <li>2017 - 2018</li>
                <li>Percentage : 90.2%</li>
                <br/>
                <li>High School (I.C.S.E.) | St. Thomas school, Khalilabad</li>
                <li>2015 - 2016</li>
                <li>Percentage : 90.2%</li>
            </ul>
            <br/>
            <b><h2>Experience</h2></b>
            <ul className='f2'>
                <li><b>Software Testing Intern | Reverr</b><br/>
                19th Aug 2022 - 19th Oct 2022<br/>
                Technologies : ReactJS, ExpressJS</li>
            </ul>
            <br/>
            <b><h2>Achievements</h2></b>
            <ul className='f2'>
                <li>Rank 3343 in GATE 2022 CS Paper</li>
                <li>NPTEL Discipline Star | <i >For completing 50 weeks of learning and having final score in each subject {'>'}=55</i></li>
                <li>NPTEL Enthusiast | <i>For appearing in atleast 8 exams between Jan 2020 and July 2021 and passing in 75% of them</i></li>
            </ul>
            <br/>
            <b><h2>Extracurricular</h2></b>
            <ul className='f2'>
                <li>Reading Books</li>
                <li>Playing Chess</li>
            </ul>
            <div className='foot1'>
            <hr className='h1'/>
            <hr className='h1'/>
            </div>
        </div>
        <Footer/>
    </>
}

export default About;
