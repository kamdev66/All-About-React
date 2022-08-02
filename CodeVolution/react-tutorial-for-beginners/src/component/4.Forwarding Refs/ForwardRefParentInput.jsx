import React, { Component } from 'react'
import ForwardRefInput from './ForwardRefInput'

export class ForwardRefParentInput extends Component {
    constructor(props) {
      super(props)
     this.inputRef=React.createRef(); 
      
    }
    clickHander=()=>{
        this.inputRef.current.focus();
    }
  render() {
    return (
      <div>
        <ForwardRefInput ref={this.inputRef}/>
        <button onClick={this.clickHander}>Focus Input</button>
      </div>
    )
  }
}

export default ForwardRefParentInput