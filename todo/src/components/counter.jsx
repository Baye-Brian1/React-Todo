import React from "react";
import { useState } from "react";

const Counter = () =>{
  const [count, setCount]= useState(0);
return(
  <div className="count">
    <h1>{count}</h1>
    <div className="btn">
    <button onClick={()=> setCount(count+ 1)}>Increase</button>
    <button onClick={()=> setCount(count+ -1)}>Decrease</button>
    </div>
  </div>
);
}
export default Counter;