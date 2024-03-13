import React from "react"

const ChildComponent = (props) => {
  const { name } = props
  console.log('儿子组件渲染')
  return (
    <div>
      <div>我是{name}...</div>
    </div>
  )
}

export default ChildComponent