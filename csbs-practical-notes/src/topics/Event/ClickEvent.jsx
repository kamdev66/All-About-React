import React from 'react'

function ClickEvent() {
    function apple(){
        alert('Function Called');
    }
  return (
    <div>
        <h1>Hello World!</h1>
       {/* <button onClick={apple}>Click Me</button> */}  {/*yaha par agar apple() karte to ye bina click kiye hi call ho jata */}
       <button onClick={()=>alert("Hi Bro!")}>Click Me</button> {/*ye apple func. ko call nhi krega, ye bas alert kr dega  */}
    </div>
  )
}

export default ClickEvent