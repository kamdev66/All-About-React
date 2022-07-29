import React from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
    function ParentAlert(data){
        alert(data)
    }
  return (
    <div>
        <h1>Lifting state Up</h1>
        <ChildComponent alert={ParentAlert}/>
    </div>
  )
}

export default ParentComponent