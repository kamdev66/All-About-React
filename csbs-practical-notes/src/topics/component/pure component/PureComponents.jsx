//Pure Component:- same value se props ya  state update hoga to pure component rerender nhi hoga.

import React, { PureComponent } from 'react'

 class PureComp extends PureComponent {
    constructor(){
        super();
        this.state={
            count:1
        }
    }
  render() {
    console.log("Check Re-rendering");
    return (
      <div>
        <h1>PureComponent in react {this.state.count}</h1>
        <button onClick={()=>this.setState({count:1})}>Update count</button>
      </div>
    )
  }
}

export default PureComp