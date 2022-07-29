import React,{useState} from "react";

function stringarrayrendering() {
    const temp=['apple','banana','orange','grapes']
    const [products,setProducts]=useState(temp)
  return <div>
   {
    products.map((prod)=>{
        return(
            <li>{prod}</li>
        )
    })
   }
  </div>;
}

export default stringarrayrendering;
