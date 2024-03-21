import React, { useCallback,useRef, forwardRef, useImperativeHandle, useState, useMemo, memo } from "react"
// import { useState, useReducer } from "react"
import { Button } from 'antd'
import Child from "./Child"
    import { flushSync } from "react-dom"
    import ChildB from "./ChildB"

const AboutComponent = function() {
  const [count, setcount] = useState(0)
  const [count2, setcount2] = useState(0)
  const [testArr, settestarr] = useState([]) as any
  const handleClick = (data) => {
    console.log('data>>>', data)
    console.log('count>>>', count)
    setcount(data)
    // setcount((prev) => {
    //   const res = prev + 1
    //   console.log('res', res)
    //   return res
    // })
 
  }
  const handleClick2 = () => {
    setcount2(count2 + 1)
  }
  const handleClickArr = (data) => {
    console.log('父组件当前data>>>',testArr)
    settestarr([...testArr, data])
  }
  console.log('爸爸渲染')
  const parentclick = () => {
    // flushSync(()=>{
    //   setcount(count + 1, () => )
    //   console.warn('count>>1', count)
    // })
      console.warn('count>>2', count)

    //在flushSync中的回调单独视为一次批处理
     
    // console.log(this.state.name) //zhangsan
    // setTimeout(() => {
    //   console.warn('count>>1', count)
    //   setcount(count + 1)
    //   console.warn('count>>2', count)
    // }, 0);

  }

  return (
    <div>
      <span>count1: {count}</span>
      <span>count2: {count2}</span>
      <Button onClick={parentclick}>父组件按钮</Button>
      <Button onClick={() => handleClick(Math.random())}>React点击1</Button>
      <Button onClick={handleClick2}>React点击2</Button>
      <Child text={testArr} />
      <ChildB handleClickArr={handleClickArr}/>
    </div>
  )
}

export default AboutComponent


