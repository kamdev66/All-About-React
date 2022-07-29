import React from 'react'
import PassFunctionAsProps from './PassFunctionAsProps'

function ParentPassFunc() {
    function getData(){
        alert("hello");
    }
  return (
    <div>
        <PassFunctionAsProps data={getData}/>
    </div>
  )
}

export default ParentPassFunc