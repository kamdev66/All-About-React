import React,{useState} from 'react'

function StateInFunctionalComponent() {
    const [data,setData]=useState('Kamdev');
    function changeName(){
        setData('Sonu Singh Rockers');
    }
  return (
    <div>
        <h1>State in functional Component</h1>
        <h2>{data}</h2>
        <button onClick={changeName}>Change the name</button>
    </div>
  )
}

export default StateInFunctionalComponent