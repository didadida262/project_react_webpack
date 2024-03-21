import './index.scss'
import React from 'react'
import paper from 'paper'
import { useState, useEffect, useRef } from 'react'
import imgurl from '../../../assets/只狼.jpeg'

const DrawComponent = (props) => {
  const { activeTool }  = props
  const canvasRef = useRef(null) as any
  const initPoint = useRef(new paper.Point(0, 0))

  const onMouseDown = (e) => {
    initPoint.current = e.point
  }
  const onMouseDrag = (e) => {
    const delta = initPoint.current.subtract(e.point)
    const newCenter = paper.project.view.center.add(delta)
    const view: paper.View = paper.project.view
    paper.project.view.center = newCenter

  }
  const setCursorPointer = () => {
    switch (activeTool) {
      case 'pointer':
        canvasRef.current.style.cursor = 'pointer'
        break;
      case 'rect':
        canvasRef.current.style.cursor = 'crosshair'
        break
      case 'pencil':
        canvasRef.current.style.cursor = 'crosshair'
        break
      case 'brush':
        canvasRef.current.style.cursor = 'none'
        break
    }
  }
  const initCanvas = () => {
    paper.setup(canvasRef.current)
    // paper.view.onMouseDown = onMouseDown
    // paper.view.onMouseDrag = onMouseDrag
    console.log('paper>>>', paper)
    
  }
  const drawPic = () => {
    const raster = new paper.Raster(imgurl)
    raster.onLoad = () => {
      raster.fitBounds(paper.view.bounds, false)
    }
  }
  useEffect(() => {
    initCanvas()
    drawPic()

  }, [])
  useEffect(() => {
    setCursorPointer()
  }, [activeTool])
  return (
    <div className='draw'>
      <canvas ref={ canvasRef } className="main_canvas" />
    </div>
  )
}

export default DrawComponent