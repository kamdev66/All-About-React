import React,{useState} from 'react'

function GetInputBoxData() {
    const [data,setData]=useState(null);
    const [print,setPrint]=useState(false);
    function getData(val){
      setData(val.target.value)
    }
  return (
    <div>
        <h1>Get Input Box Value</h1>
        <input type="text" onChange={getData}/>
            {
                print?<h1>{data}</h1> : null
            }
        <button onClick={()=>setPrint(true)}>print Value</button>
    </div>
  )
}

export default GetInputBoxData