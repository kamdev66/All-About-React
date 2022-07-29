/*To create a global store,i will use createStore() method of redux.
const store=createStore(reducer);
It returns the store object i.e. the global state
here, reducer is the name of a function which will act as reducer

Remember:- A reducer function becomes an actual reducer when you pass it as an argument inside createStore() method.
*/

import {createStore} from "redux";

const initData={
    products:[
        {pName:'Apple',price:20},
        {pName:'Banana',price:3},
        {pName:'Orange',price:10},
        {pName:'Grapes',price:8},
        {pName:'Mango',price:45}
    ],
    cart:[],
    total:0
}

const reducer=(state=initData,action)=>{  //here,action receives the value from dispatch
   if(action.type==='PURCHASE'){
    return {
        ...state,
        cart:[...state.cart,action.payLoad],
        total: state.total+parseInt(action.payLoad.price)
    }
   }
   if(action.type==='DELETE'){
    return{
        ...state,
        cart:state.cart.filter((item,index)=>index!=action.payLoad.index),
        total:state.total-action.payLoad.price
    }
   }
   return state
};

const store=createStore(reducer);
export default store