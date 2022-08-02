import React, { Component } from 'react'
import MemoComp from './MemoComp';

class ParentinMemo extends Component {
    constructor(props){
        super();

        this.state={
            name:'Kamdev'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Kamdev'
            })
        },2000)
    }
  render() {
    console.log('----Parent Component-------')
    return (
      <div>
        ParentComp
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentinMemo;