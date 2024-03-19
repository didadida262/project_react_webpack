/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import './index.scss'
import React, { useRef, useEffect} from 'react'
import { Button } from 'antd';
import { TaobaoCircleOutlined } from '@ant-design/icons';
import paper from 'paper'

const pointerComponent = (props) => {
  const { activeTool, onClick } = props
  const name = 'pointer'
  let initPoint = new paper.Point(0, 0)

  const initTool = () => {
    let tool = new paper.Tool()
    tool.onMouseDown = (e) => {
      initPoint = e.point
    }
    tool.onMouseDrag = (e) => {
      const delta = initPoint.subtract(e.point)
      const currentProject: paper.Project = paper.project
      const currentCenter = currentProject.view.center
      currentProject.view.center = currentCenter.add(delta)
    }
    tool.onMouseMove = (e) => {
    }
    tool.onMouseUp = (e) => {
    }
    tool.activate()
  }

  useEffect(() => {
    return () => {
    }
  }, [])
  useEffect(() => {
    if (activeTool === name) {
      initTool()
    }
  }, [activeTool])
  return (
    <div className='pencil mgb10'>
      <Button
        className={ activeTool === 'pointer' ? 'active' : ''}
        style={{ width: 80}} 
        icon={ <TaobaoCircleOutlined />}
        onClick={ () => onClick(name) }>
       </Button>
    </div>
  )
}

export default pointerComponent