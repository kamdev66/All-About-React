import React, { Component } from 'react'
import PureComp from './PureComp';
import RegularComp from './RegularComp';

class ParentComp extends Component {
    constructor(props){
        super();

        this.state={
            name:'Kamdev'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Kamdevz'
            })
        },2000)
    }
  render() {
    console.log('----Parent Component-------')
    return (
      <div>
        ParentComp
        <RegularComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp