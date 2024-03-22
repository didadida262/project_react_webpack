/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import './index.scss'
import React, { useRef, useEffect} from 'react'
import { Button } from 'antd';
import paper from 'paper'

const pointerComponent = (props) => {
  const { activeTool, onClick } = props
  const name = 'pointer'
  let initPoint = new paper.Point(0, 0)
  let cursorPoint = null as any
  let hitResult = null as any
  const hitOptions = {
    segments: true,
    // stroke: true,
    // fill: true,
    tolerance: 2
    // match: hit => {
    //   return !hit.item.hasOwnProperty('indicator') && !hit.item.parent.hasOwnProperty('ignore')
    // }
  }

  const createCursor = (point) => {
      removeCursor()
      cursorPoint = new paper.Path.Circle({
        center: point,
        radius: 10,
        strokeColor: 'black',
        strokeWidth: 5
      })
  }
  const removeCursor = () => {
    if (cursorPoint) {
      cursorPoint.remove()
      cursorPoint = null
    }
  }
  const initTool = () => {
    let tool = new paper.Tool()
    tool.onMouseDown = (e) => {
      initPoint = e.point
      const activateProject = paper.project
      hitResult = activateProject.hitTest(
        e.point,
        hitOptions
      )
      console.log('hitResult>>>>', hitResult)
    }
    tool.onMouseDrag = (e) => {
      console.warn('hitResult>>>>', hitResult)
      if (hitResult && hitResult.segment) {
        removeCursor()
        const segment = hitResult.segment
        segment.point = e.point
      } else {
        const delta = initPoint.subtract(e.point)
        const currentProject: paper.Project = paper.project
        const currentCenter = currentProject.view.center
        currentProject.view.center = currentCenter.add(delta)
      }
    }
    tool.onMouseMove = (e) => {
      const activateProject = paper.project
      hitResult = activateProject.hitTest(
        e.point,
        hitOptions
      )
      if (hitResult && hitResult.type === 'segment') {
        createCursor(e.point)
      } else {
        removeCursor()
      }
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
        onClick={ () => onClick(name) }>
         <i className="fa fa-mouse-pointer"></i> 
       </Button>
    </div>
  )
}

export default pointerComponent