import React,{useState,useEffect} from 'react'

function CondnRender() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('');

    useEffect(()=>{
        console.log('useEffect called');
        document.title=`You clicked ${count} times`
    },[name])  //bas name ke liye re-render hoga
//Note:- if we want to run useEffect only when count changes,we pass the second parameter(this parameter is an array),within this array we need to specify either props or state that we need .
  return (
    <div>
         <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
         <button onClick={()=>setCount(count+1)}>Click {count} times</button>
    </div>
  )
}

export default CondnRender