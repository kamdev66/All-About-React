import React,{forwardRef} from 'react'

function ChildForwardRef(props,ref) {
  return (
    <div>
        <input type="text" ref={ref}/>
    </div>
  )
}

export default forwardRef(ChildForwardRef)