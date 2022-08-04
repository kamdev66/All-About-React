const redux=require('redux');
const createStore=redux.createStore

//action
const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'
//action creator is a function that returns an action,to implement the action creator we will create a function which returns the action.
function buyCake(){
    return {
        type:BUY_CAKE,
        info:'First redux action'
    }
}

//for icecream
function buyIceCream(){
    return {
        type:BUY_ICECREAM
    }
}


//reducers:- (prevState,action)=>newState
const initialState={
    numOfCakes:10,
    numOfIcecreams:20
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:return {
            //your state object might contain more than one property that's why it is always safer to first,craete a copy of state object and then change only the properties that needs to.To make the copy of this state object,we use spread operator.
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        case BUY_ICECREAM:return{
            ...state,
            numOfIcecreams:state.numOfIcecreams-1
        }
        default:return state
    }
}


//store
const store=createStore(reducer)
console.log('Initial State',store.getState())
const unsubscribe=store.subscribe(()=>console.log('Updated State:',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()