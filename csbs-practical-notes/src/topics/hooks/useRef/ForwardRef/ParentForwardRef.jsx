import React,{useRef} from 'react'
import ChildForwardRef from './ChildForwardRef'

function ParentForwardRef() {
    let input=useRef(null);
    function updateInput(){
        input.current.value="2000";
        input.current.focus();
    }
  return (
    <div>
        <h1>Forwardref in React</h1>
        <ChildForwardRef ref={input}/>
        <button onClick={updateInput}>Upadte Inbox jo child me hai</button>
    </div>
  )
}

export default ParentForwardRef