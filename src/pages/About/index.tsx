import React, { useCallback,useRef, forwardRef, useImperativeHandle, useState, useMemo, memo } from "react"
import { Button } from 'antd'
import Child from "./Child"
import RenderComponents from "./RenderProps"

const MemoSon = memo(Child)
const HOC = (ChildComponent) => {
  const res = (props) => {
    return (
      <div>
        <span>我是高阶</span>
        <ChildComponent {...props}></ChildComponent>
      </div>
    )
  }
  return res
}
const TT = HOC(Child)

const AboutComponent = function() {
  const [count, setcount] = useState({
    name: 1,
    old: 2
  })
  const [count2, setcount2] = useState(0)
  console.log('父组件渲染')
  return (
    <div>
      <span>测试</span>
      {/* <Child count={count} /> */}
      <MemoSon count={count} />
      <span>count: {count.name}</span>
      <span>count2: {count2}</span>
      <Button onClick={() => setcount({
        ...count,
        name: count.name + 1
      })}>改变子数据</Button>
      <Button onClick={() => setcount2(count2+1)}>改变其他数据</Button>

      <TT />
    </div>
  )
}

export default AboutComponent


