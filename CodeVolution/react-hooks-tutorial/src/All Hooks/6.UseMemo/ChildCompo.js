import React,{memo} from 'react'

function ChildCompo() {    
    console.log("Child component");
  return (
    <div>ChildCompo</div>
  )
}

export default memo(ChildCompo)