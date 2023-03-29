
import { useState,useEffect } from 'react';

import './Footer.css';
import Footer1 from './Footer1';
import Footer2 from './Footer2';

const Footer = () => {

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


    return <>
    {check?<Footer1/>:<Footer2/>}
  </>
}

export default Footer;