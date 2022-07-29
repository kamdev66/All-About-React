import React,{useRef} from 'react'

function UseOfUseRef() {
   let input=useRef(null);
   function handleInput(){
    console.log("function called");
     input.current.value="1000";
     input.current.focus();
   }
    return (
    <div>
        <h1>UseRef in React</h1>
        <input type="text" ref={input}/>
        <button onClick={handleInput}>Handle Input</button>
    </div>
  )
}

export default UseOfUseRef