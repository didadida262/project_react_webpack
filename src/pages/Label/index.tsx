import './index.scss'
import React, { useState } from 'react'
// import ToolsComponent from './Tools'
import DrawComponent from './Draw'
import Pencil from './Pencil'
import ReactComponent from './React'

const LabelComponent = () => {
  const [activeTool, setactiveTool] = useState('pencil')
  const handleClickTool = (tool) => {
    setactiveTool(tool)
  }
  return (
    <div className='label flex-sb'>
      <div className='tools-container pd5'>
        <Pencil
         activeTool={activeTool}
         onClick={handleClickTool}
         />
        <ReactComponent
          activeTool={activeTool}
          onClick={handleClickTool}
         />
      </div>
      <div className='view-container'>
        <DrawComponent/>
      </div>
    </div>
  )
}

export default LabelComponent