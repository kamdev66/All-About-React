import React,{useState} from 'react'
import ChildCompo from './ChildCompo'

function ParentCompo() {
    const [add,setAdd]=useState(0)
    
  return (
    <div>
        <h1>Learning UseMemo</h1>
        <ChildCompo/>
        <h1>{add}</h1>
        <button onClick={()=>setAdd(add+1)}>Addition</button>

    </div>
  )
}

export default ParentCompo