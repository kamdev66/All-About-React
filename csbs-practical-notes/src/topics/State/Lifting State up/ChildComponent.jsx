import React from 'react'

function ChildComponent({alert}) {
    const data='Kamdev Kumar'
  return (
  <>
    <div>ChildComponent</div>
    <button onClick={()=>alert(data)}>Click Me</button>
    </>
  )
}

export default ChildComponent