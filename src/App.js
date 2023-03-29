import { useState,useEffect } from 'react';

import { HashRouter as Router,Route,Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';
import Dashboard2 from './pages/Dashboard2/Dashboard2';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contacts/Contact';


const App = () => {
    
    const[width,setWidth]=useState(window.innerWidth);
    const[check,setCheck]=useState(0);

     const handle=()=>{  
     setWidth(window.innerWidth);}

     useEffect( () => {
       window.addEventListener('resize',handle);   
       return() => {
       window.removeEventListener('resize',handle); }
       },[]);

       useEffect( ()=>{

       if(width>=700)
         {
        setCheck(1);}
        else{
         setCheck(0);}


          },[width]);

    return <Router>
    <Routes>
      <Route path='/' element={check ? <Dashboard/> : <Dashboard2/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </Router>
}

export default App;