import './index.scss'
import React from 'react'
// import ToolsComponent from './Tools'
import DrawComponent from './Draw'
import Pencil from './Pencil'
import ReactComponent from './React'

const LabelComponent = () => {
  return (
    <div className='label flex-sb'>
      <div className='tools-container flex-col-start'>
        <Pencil />
        <ReactComponent />
      </div>
      <div className='view-container'>
        <DrawComponent/>
      </div>
    </div>
  )
}

export default LabelComponent