import React from "react";
import { useState } from "react";

const Counter = () =>{
  const [count, setCount]= useState(0);
return(
  <div className="count">
    <h1>{count}</h1>
    <button onClick={()=> setCount(count+1)}>Increase</button>
  </div>
);
}
export default Counter;