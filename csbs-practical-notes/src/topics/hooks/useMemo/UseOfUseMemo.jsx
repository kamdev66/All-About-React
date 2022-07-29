//ye pureComponent hi hai , ise func. comp me usememo kaha jaata hai
import React,{useState,useMemo} from 'react'

function UseOfUseMemo() {
    const [count,setCount]=useState(0);
    const [item,setItem]=useState(10);

    const multiplyCountMemo=useMemo(function multiplyCount(){
        console.log("multiply");
        return count*5;
    },[count])

  return (
    <div>
         <h1>UseMemo Hook in react</h1>
         <h2>Count : {count}</h2>
         <h2>Item : {item}</h2>
         <h2>Multiply :{multiplyCountMemo}</h2>
         <button onClick={()=>setCount(count+10)}>Update Count</button>
         <button onClick={()=>setItem(item+1)}>Update Item</button>
    </div>
  )
}

export default UseOfUseMemo