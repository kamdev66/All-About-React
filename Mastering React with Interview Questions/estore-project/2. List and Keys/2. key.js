//key syntax

products.map((prod,i)=>{
    return(
        <li key={i.toString()}>{prod}</li>
    )
})