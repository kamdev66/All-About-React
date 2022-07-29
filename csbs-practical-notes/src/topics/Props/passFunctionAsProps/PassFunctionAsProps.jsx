import React from 'react'

function PassFunctionAsProps({data}) {
  return (
    <div>
        <button onClick={data}>Call Function Which is in Parent Component</button>
    </div>
  )
}

export default PassFunctionAsProps