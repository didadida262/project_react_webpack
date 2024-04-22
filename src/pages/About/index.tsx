/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-03-14 02:00:24
 * @LastEditors: didadida262
 * @LastEditTime: 2024-04-22 16:37:04
 */
import React, { useCallback,useRef, forwardRef, useImperativeHandle, useState, useMemo, memo } from "react"
import { Button } from 'antd'
import Child from "./Child"
import RenderComponents from "./RenderProps"
import './index.scss'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { getRandomColor } from 'miles_common_weapons'


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
  console.log('getRandomColor>>>>>>',getRandomColor())
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
      <div className="fadeIn">
        <p className="test SingleLineTextOverflow">
        这是一段很长很长的文本
        这是一段很长很长的文本
        这是一段很长很长的文本
        这是一段很长很长的文本
        这是一段很长很长的文本
        这是一段很长很长的文本
        这是一段很长很长的文本
        </p>
      </div>
    </div>
  )
}

export default AboutComponent


