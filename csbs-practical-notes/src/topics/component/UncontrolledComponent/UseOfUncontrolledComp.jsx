import React,{useRef} from 'react'
//Uncontrolled comp:- ye directly javascript ke through contyrol hogi ya fir ref ke through
function UseOfUncontrolledComp() {
    const input=useRef(null);
    const input2=useRef(null);
    function submitForm(e){
      e.preventDefault();
      console.log("Input field 1 value: " + input.current.value);
      console.log("Input field 2 value: " + input2.current.value);
    }
  return (
    <div>
        <h1>Uncontrolled component</h1>
        <form onSubmit={submitForm}>
        <input type="text" ref={input}/><br/><br/>
        <input type="text" ref={input2}/><br/><br/>
        <button >Submit</button>

        </form>
    </div>
  )
}

export default UseOfUncontrolledComp