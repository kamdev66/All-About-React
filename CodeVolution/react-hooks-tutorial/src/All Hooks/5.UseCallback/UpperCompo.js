import React,{useState,useCallback} from 'react'
import InnerCompo from './InnerCompo'

function UpperCompo() {
    const [add,setAdd]=useState(0)
   /* const Learning=()=>{          //yaha par hum useMemo use krenge ,fir v hmara Inner Compo re-render hoga ,qki yaha par function hai,aur har re-render k bad, hmara function re-create hota hai
        //some statement
    }*/
    const Learning=useCallback(()=>{
        //some statement
    },[])
  return (
    <div>
        <h1>Learning UseCallback</h1>
        <InnerCompo Learning={Learning}/>
        <h1>{add}</h1>
        <button onClick={()=>setAdd(add+1)}>Addition</button>

    </div>
  )
}

export default UpperCompo