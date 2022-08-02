import React from 'react'

function MemoComp() {
    console.log('MemoComp')
  return (
    <div>MemoComp</div>
  )
}

export default React.memo(MemoComp);