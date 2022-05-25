import React from "react";
import { useState } from "react";

const Stopwatch = () => {
    const [timerid, setTimerid] = useState(null)
  const [watch, SetWatch] = useState(0);
  const start  = () =>{
      if(!timerid){
        let id = setInterval(()=>{
            SetWatch((prev)=>prev+1)
        },1000)
        setTimerid(id)
        // console.log(true)
    }
     
  };
  const pause = () =>{
      clearInterval(timerid)
      setTimerid(null)
  };
  const reset = () =>{
      clearInterval(timerid);
      SetWatch(0)
      setTimerid(null)
      console.log(timerid)
  };
  return (
    <div>
      <h1>Stopwatch : {watch}</h1>
      <div>
        <button onClick={start}>start</button>
        <button onClick={pause}>pause</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;

