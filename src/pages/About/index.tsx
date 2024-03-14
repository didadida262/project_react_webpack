import React, { useCallback,useRef, forwardRef, useImperativeHandle, useState, useMemo, memo } from "react"
// import { useState, useReducer } from "react"
import { Button } from 'antd'

const Child = memo((props: any) => {
  const { onClick } = props
  console.log('zi组建更新', onClick)
  return <button onClick={onClick}>子组建按钮</button>
})

const AboutComponent = () => {
  const [count, setcount] = useState(0)
  const [value, setvalue] = useState('hhvcg')
  console.log('父组建更新')

  const handleClick = (type) => {
    console.log('执行>>>')
    setcount(count+1)
  }
  const handleClick2 = useCallback((type) => {
    setcount(count+1000)
  }, [])

  return (
    <div>
      <span>{count}</span>
      <Button onClick={handleClick}></Button>
      <Child onClick={handleClick2}/>
    </div>
  )
}

export default AboutComponent