import { useEffect } from "react"
import React from "react"

const ChildComponent = (props) => {
  const { name } = props
  console.log('儿子组件渲染')
  useEffect(() => {
    console.log('儿子-effect')
    return () => {
      console.log('儿子-destroy')
    }
  }, [])
  return (
    <div>
      <div>我是{name}...</div>
    </div>
  )
}

export default ChildComponent