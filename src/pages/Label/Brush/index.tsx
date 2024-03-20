/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import './index.scss'
import React, { useRef, useEffect} from 'react'
import { Button } from 'antd';
import paper from 'paper'

const brushComponent = (props) => {
  const { activeTool, onClick } = props
  const name = 'brush'
  let initPoint = new paper.Point(0, 0)
  let circle = null as any
  let path = null as any

  const initTool = () => {
    let tool = new paper.Tool()
    circle = new paper.Path.Circle({
      center: 0,
      radius: 10,
      strokeColor: 'red'
    })
    path = new paper.CompoundPath({
    })
    tool.onMouseDown = (e) => {
      initPoint = e.point
    }
    tool.onMouseDrag = (e) => {
      console.log('path>>>', path)
     new paper.Path.Circle({
        center: e.point,
        radius: 10,
        fillColor: 'red'
      })
      // path.addChild(cur)
    }
    tool.onMouseMove = (e) => {
      circle.remove()
      circle = new paper.Path.Circle({
        center: e.point,
        radius: 10,
        fillColor: 'red'
      })
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
    <div className='brush mgb10'>
      <Button
        className={ activeTool === 'brush' ? 'active' : ''}
        style={{ width: 80}} 
        onClick={ () => onClick(name) }>
         <i className="fa fa-paint-brush"></i> 
       </Button>
    </div>
  )
}

export default brushComponent