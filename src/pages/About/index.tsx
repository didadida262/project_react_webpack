import React, { useCallback,useRef, forwardRef, useImperativeHandle, useState, useMemo, memo } from "react"
// import { useState, useReducer } from "react"
import { Button } from 'antd'


const AboutComponent = function() {
  const [count, setcount] = useState(0)
  const handleClick = function(type) {
    setcount((prev) => {
      const res = prev + 1
      console.log('res', res)
      return res
    })
 
  }

  return (
    <div>
      <span>{count}</span>
      <Button onClick={handleClick}>React点击</Button>
    </div>
  )
}

export default AboutComponent


