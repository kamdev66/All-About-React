import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {    //this is the reducer function which is passed to the usereducer hook based on action value,the function will increment,decrement or reset the counter value. 
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function CounterThree() {
  const [count,dispatch]=useReducer(reducer, initialState);
  const [countTwo,dispatchTwo]=useReducer(reducer,initialState)
  return (
    <>
    <div>
      <h2>Count - {count}</h2>
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('decrement')}>Decrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
    <div>
      <h2>Count Two- {countTwo}</h2>
      <button onClick={()=>dispatchTwo('increment')}>Increment</button>
      <button onClick={()=>dispatchTwo('decrement')}>Decrement</button>
      <button onClick={()=>dispatchTwo('reset')}>Reset</button>
    </div>
    </>
  );
}

export default CounterThree;
