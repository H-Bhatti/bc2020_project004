import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./room.css"


 function Room()
 {

    let [lightState , setLight] = useState(false);
    let [adder , add] = useState(72)
    
    return (
        <div>
           
            <strong>This light box is {lightState? "Lit":"Not Lit"}</strong> 
            <br />
            <button class={`button ${lightState? "lit":"dark"}`} onClick = {() =>setLight(!lightState)}>Toggle Switch</button>
            <br></br>
            <strong> Temp = {adder}°F </strong>
            <br/>
            <button id="adder" onClick={()=>{add(++adder)}}>+1°F</button>
            <button id="adder" onClick={()=>{add(--adder)}}>-1°F</button>
        </div>
        
    );

 }  

 
 export default Room;