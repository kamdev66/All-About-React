import React from 'react'
import {useDispatch} from 'react-redux'


function Items() {
  //for useDispatch also,we have to create object   //jaisa hamne useSelector ka object bnaya tha
const dispatch=useDispatch()
  const additem=()=>{
    dispatch({type:'ADD_ITEM'})  //it accepts objects as the parameter
     
  }
  const removeitem=()=>{
    dispatch({type:'REMOVE_ITEM'})
  }
  return (
    <div>
        <h1>Item Component</h1>
        <button onClick={additem}>ADD ITEM</button>
        <button onClick={removeitem}>REMOVE ITEM</button>
    </div>
  )
}

export default Items