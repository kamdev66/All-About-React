import React,{Component} from 'react';

class StateInClassComponent extends Component{
    constructor(){
        super();
        this.state={
            data:"Kamdev"
        }
    }

     changeName(){
        this.setState(
            {
                data:this.state.data="Sonu Singh Rockers"
            }
        )
    }
    render(){
        return(
            <>
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.changeName()}>Click Me</button>
            </>
        )
    }
}
export default StateInClassComponent;