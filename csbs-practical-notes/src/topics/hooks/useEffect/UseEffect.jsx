import React,{useEffect,useState} from 'react'

function UseEffect() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("useEfffect Called");
    },[count]) //yaha par count nhi bhi de skte hai,
  return (
    <div>
        <h1>Useeffect In React {count}</h1>
        <button onClick={()=>setCount(count+1)}>Update counter</button>
    </div>
  )
}

export default UseEffect