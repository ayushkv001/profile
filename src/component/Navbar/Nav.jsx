import { useEffect,useState } from 'react';

import Navbar from '../../component/Navbar/Navbar';

import Navbar2 from '../../component/Navbar/Navbar2';

const Nav = () => {

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

          useEffect(()=>{
            document.body.style.overflowY = "auto";
        },[]);


    return <>
    
    {check ? <Navbar/> : <Navbar2/>}
    </>
}

export default Nav;