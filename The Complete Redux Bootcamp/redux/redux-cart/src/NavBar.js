import React from 'react';
import {useSelector} from 'react-redux';

function NavBar() {
    const cartdata=useSelector(store=>store)   //now with the help of this cartdata object,we will able to get all data from cartReducer. 
  return (
    <div>
        <h1>This is a NavBar Component - Cart Value : {cartdata.cartcount}</h1>
    </div>
  )
}

export default NavBar