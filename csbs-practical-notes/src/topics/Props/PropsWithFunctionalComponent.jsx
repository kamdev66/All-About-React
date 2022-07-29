import React from 'react'

function PropsWithFunctionalComponent({name}) {
    console.log(name);
  return (
    <div>
       <h1>First Component</h1>
       <h3>Props are coming from app is :----{name}</h3>
    </div>
  )
}

export default PropsWithFunctionalComponent