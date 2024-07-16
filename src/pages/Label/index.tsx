/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-03-14 00:32:06
 * @LastEditors: didadida262
 * @LastEditTime: 2024-07-17 02:19:35
 */
import { message } from 'antd'
import React, { useEffect, useState } from 'react'

import Brush from './Brush'
import DrawComponent from './Draw'
import PathItem from './PathItem'
import Pencil from './Pencil'
import Pointer from './Pointer'
import Rect from './Rect'
// import ToolsComponent from './Tools'

import './index.scss'

const LabelComponent = () => {
  const [activeTool, setactiveTool] = useState('pencil')
  const [categories, setcategories] = useState([]) as any
  const [currentPath, setcurrentPath] = useState(null) as any

  const handleClickTool = (tool) => {
    setactiveTool(tool)
    message.success(`激活${tool}`)
  }
  useEffect(() => {
    console.log(currentPath)
    if (currentPath) {
      const len = categories.length
      const newPath = {
        key: len,
        name: `标注数据:${len + 1}`,
        path: currentPath
      }
      setcategories((prevItems) => [...prevItems, newPath]);
    }
  }, [currentPath])
  const submitPath = (data) => {
    console.log('data>>>',data)
    setcurrentPath(data)
  }
  return (
    <div className='label flex-sb px-[10px] py-[10px]'>
      <div className='tools-container'>
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
        <Brush
          activeTool={activeTool}
          onClick={handleClickTool}
          submitPath={submitPath}
         />
      </div>
      <div className='h-full w-[calc(100%_-_310px)] rounded-[4px] border-[1px] border-solid border-borderSecondColor'>
        <DrawComponent
          activeTool={activeTool}
          />
      </div>
      <div className='h-full w-[200px] rounded-[4px] border-[1px] border-solid border-borderSecondColor'>
        <PathItem data={categories}/>
      </div>
    </div>
  )
}

export default LabelComponent