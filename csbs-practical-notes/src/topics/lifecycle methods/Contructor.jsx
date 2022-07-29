import React, { Component } from 'react'

export class Contructor extends Component {
    constructor(){
        super();
        console.log("Constructor Called");
    }

    componentDidMount(){
        console.log("ComponentDidMount Called");
    }
  render() {
    console.log("Render Called");
    return (
      <div>
        <h1>Kamdev</h1>
      </div>
    )
  }
}

export default Contructor