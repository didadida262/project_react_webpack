import './index.scss'
import React, { useState } from 'react'
// import ToolsComponent from './Tools'
import DrawComponent from './Draw'
import Pencil from './Pencil'
import Rect from './Rect'
import Pointer from './Pointer'
import { message } from 'antd'

const LabelComponent = () => {
  const [activeTool, setactiveTool] = useState('pointer')
  const handleClickTool = (tool) => {
    setactiveTool(tool)
    message.success(`激活${tool}`)
  }
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
         />
        <Rect
          activeTool={activeTool}
          onClick={handleClickTool}
         />
      </div>
      <div className='view-container'>
        <DrawComponent />
      </div>
    </div>
  )
}

export default LabelComponent