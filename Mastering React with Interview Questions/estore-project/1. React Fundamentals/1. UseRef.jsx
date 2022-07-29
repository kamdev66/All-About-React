import React,{useRef} from 'react'  //1st step:- import useRef

function UseRef() {
    const inpElem=useRef(null)       //2ns step:- Initial value of useREf , it allows you to get the DOM element reference
  return (
    <div>
        <input type="text" />
        <hr/>
        <input type="text" ref={inpElem} />  {/* 3rd step:-  gives useref property to this input   */ }
        <hr/>
        <button onClick={()=>inpElem.current.focus() /*4th step:- change the value of useref   */}>Set focus on 2nd input box using Ref</button>
    </div>
  )
}

export default UseRef