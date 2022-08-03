import React, { memo } from 'react'

function InnerCompo({Learning}) {    
    console.log("Inner component");
  return (
    <div>InnerCompo</div>
  )
}

export default memo(InnerCompo)