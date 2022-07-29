import React from 'react'

function ComponentInsideComponent() {
    function InnerComponent(){
        return (
            <>
            <h1>Inner Component</h1>
            </>
        )
    }
  return (
    <div>
        <h1>Outer Component</h1>
        <InnerComponent/>
    </div>
  )
}

export default ComponentInsideComponent;