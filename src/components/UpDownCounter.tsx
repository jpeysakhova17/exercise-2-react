import { setUncaughtExceptionCaptureCallback } from "process";
import React from "react";
import {useState} from "react";

function UpDownCounter () {
    // function raiseUp () {
    //     setCount (prv=>prv+1)  
    // }
    const [count, setCount] = useState(0)
    return (
        
        <div>
            <button  onClick={()=>{setCount(prv=>prv+1)}} >Up</button>
            <p>{count}</p>
            <button  onClick={()=>{setCount(prv=>prv-1)}} >Down</button>
        </div>
        
    )
}

export default UpDownCounter;