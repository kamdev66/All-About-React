import React,{useEffect,useState} from 'react'

function UseEffectwithCondition() {
    const [data,setData]=useState(10);
    const [count,setCount]=useState(100)

    useEffect(()=>{
        console.log("use effect called");
    },[data])
  return (
    <div>
         <h1>Count : {count}</h1>
         <h1>Data : {data}</h1>
         <button onClick={()=>setCount(count+1)}>Update Count</button>
         <button onClick={()=>setData(data+1)}>Update data</button>
    </div>
  )
}

export default UseEffectwithCondition