import React, { useReducer } from "react";

const initialState = {
    firstCounter:0
};
const reducer = (state, action) => {    //this is the reducer function which is passed to the usereducer hook based on action value,the function will increment,decrement or reset the counter value. 
  switch (action.type) {
    case "increment":
      return {firstCounter:state.firstCounter+action.value}
    case "decrement":
      return {firstCounter:state.firstCounter-action.value};
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function CounterTwo() {
  const [count,dispatch]=useReducer(reducer, initialState);

  return (
    <div>
        <h2>Count - {count.firstCounter}</h2>
      <button onClick={()=>dispatch({type: 'increment',value:1})}>Increment</button>
      <button onClick={()=>dispatch({type: 'decrement',value:1})}>Decrement</button>
      <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
      <button onClick={()=>dispatch({type: 'increment',value:5})}>Increment 5</button>
      <button onClick={()=>dispatch({type: 'decrement',value:5})}>Decrement 5</button>
    </div>
  );
}

export default CounterTwo;
