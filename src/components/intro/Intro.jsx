import React, { useEffect, useRef } from "react"
import "./intro.scss"
import { init } from 'ityped'


export default function Intro(){
    const  textRef = useRef();
    useEffect(()=>{
        init(textRef.current, {
             showCursor: true,
             backDelay:100,
             backSpeed:60,
              strings: ['Developer', 'Desiner','Content-Creater' ],

    });
    },[]);
    return(
        <div className="intro" id="intro">
         <div className="left">
             <div className="imageContainer">
                 <img src="assets/man.png" alt="" />
             </div>
         </div>
         <div className="right">
             <div className="wrapper">
                 <h2> Hi there, I'm</h2>
                 <h1>VIKASH GUPTA</h1>
                 <h3>Freelance  <span ref={textRef}> </span></h3>
             </div>
             <a href="#portfolio">
                 <img src="assets/down.png" alt=""/>
             </a>
         </div>
       
        </div>
    )
}