import React,{useState} from 'react'
//controlled component:- isme hum input field ko react ke through control krte hai
function UseOfControlledComp() {
    const [val,setVal]=useState("");
  return (
    <div>
        <h1>Controlled Component</h1>
        <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
        <h2>Value : {val}</h2>
    </div>
  )
}

export default UseOfControlledComp