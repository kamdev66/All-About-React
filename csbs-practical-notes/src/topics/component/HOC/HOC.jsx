import React,{useRef,useState} from 'react'
//isme humne Hoc me Counter ko MainHigherComp me pass kiya MainHigher me humne background color change kiya aur fir component ko return kr diya
function HOC() {
  return (
    <div>
        <h1>HOC</h1>
       <MainHighOrderComponent cmp={Counter}/>

    </div>
  )
}

//2nd component
function Counter(){
    const [count,setCount]=useState(0)
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>Update</button>
        </div>
    )
}

//3rd component
function MainHighOrderComponent(props){
    return(
        <div>
            <h2 style={{backgroundColor: 'red'}}>Red Counter : <props.cmp/></h2>
        </div>
    )
}

export default HOC