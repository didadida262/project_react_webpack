import './index.scss'
import React, { useEffect, useState } from 'react'
// import ToolsComponent from './Tools'
import DrawComponent from './Draw'
import Pencil from './Pencil'
import Rect from './Rect'
import Pointer from './Pointer'
import PathItem from './PathItem'
import { message } from 'antd'

interface ICateItem {
  key: number,
  name: string
}

const LabelComponent = () => {
  console.warn('父组件')
  const [activeTool, setactiveTool] = useState('pencil')
  const [categories, setcategories] = useState<ICateItem[]>([]) as any
  const [count, setcount] = useState(0)
  const [temp, settemp] = useState({}) as any

  const handleClickTool = (tool) => {
    setactiveTool(tool)
    message.success(`激活${tool}`)
  }
  const submitPath = (data) => {
    setcount((precount) => precount + 1)
    settemp(data)
  }
  useEffect(() => {
    if (Object.keys(temp).length) {
      console.log('temp>>', temp)
      const newPath = {
        key: count - 1,
        name: `标注数据:${count -1}`,
        path: temp
      }
      setcategories((prevItems) => [...prevItems, newPath]);
      settemp({})
    }
  }, [count])
  return (
    <div className='label flex-sb'>
      <div className='tools-container pd10'>
        <Pointer
         activeTool={activeTool}
         onClick={handleClickTool}
         />
        <Pencil
         activeTool={activeTool}
         onClick={handleClickTool}
         submitPath={submitPath}
         />
        <Rect
          activeTool={activeTool}
          onClick={handleClickTool}
          submitPath={submitPath}
         />
      </div>
      <div className='view-container'>
        <DrawComponent />
      </div>
      <div className='category-container'>
        <PathItem data={categories}/>
      </div>
    </div>
  )
}

export default LabelComponent