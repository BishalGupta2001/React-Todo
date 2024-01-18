// vinod thapa youtube chanell se hook pad raha tha so use state and use effect hooks 

import React, { useState, useEffect } from 'react'

export  default function Hook() {

    let [screenWidth, setScreenWidth] = useState(window.screen.width);

    const currScreenWidth =()=> {
        setScreenWidth( ()=> window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', currScreenWidth);
        return()=>{
            window.removeEventListener("resize", currScreenWidth);
        }
    });
    
  return (
    <div>
     <h2>curent size of your window is <span style={{color:"red"}}>{screenWidth}</span></h2>
    </div>
  )
}
