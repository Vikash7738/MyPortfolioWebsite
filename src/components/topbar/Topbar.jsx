import React  from "react"
import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function Topbar({menuOpen,setMenuOpen}){
    return(
        <div className={"topbar " + ( menuOpen && "active")}>
            <div className='wrapper'>
              <div className="left">
                <a href="#Intro" className="logo">Coder..</a>
                    <div className="itemContainer">
                     <Person className="icon" />
                     <span>+91 8210517521</span>
                     
                    </div>
                    <div className="itemContainer">
                     <Mail className="icon" />
                     <span>vikashcs.iimt@gmail.com</span>

                    </div>
                </div>
              <div className="right">
                <div className="humburger" onClick={()=>setMenuOpen(!menuOpen)}>
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>

                </div>
          
                  
              </div>

            </div>

        </div>
    )
}