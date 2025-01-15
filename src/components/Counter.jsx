import { useEffect, useState } from "react";

function Counter()
{
    // count=state
    //setCount=a fn to modify
    const [count,setCount]=useState(0)
    useEffect(()=>{console.log("score has been changed",count);},[count])

 return(
    <>
    <h2> score:{count}</h2>
    <button onClick={()=>setCount(count+10)}>goal</button>
    <button onClick={()=>setCount(count-5)}>penalty</button>
    <button onClick={()=>setCount(0)}>reset</button>
    </>
)
}

export default Counter;