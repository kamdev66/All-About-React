const initialData={
    cartcount:0
}

function cartReducer(state=initialData,action){
    //creating an action
    switch(action.type){  //type means function name
         case 'ADD_ITEM':return {
            cartcount: state.cartcount+1
         }
         case 'REMOVE_ITEM':return{
            cartcount: state.cartcount-1
         }
         default:{
            return state
         }
    }
}

export default cartReducer;

