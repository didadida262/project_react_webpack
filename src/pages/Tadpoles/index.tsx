import React from 'react'
import paper from 'paper'
import { useEffect, useRef } from 'react'
import './index.scss'
import { Boid } from './myBoid.js'

const TadpolesComponent = (props) => {
  const canvasRef = useRef(null) as any
  const boids = [] as any
  let WIDTH = 0
  let HEIGHT = 0

  const initCanvas = () => {
    paper.setup(canvasRef.current)
    WIDTH = canvasRef.current.clientWidth
    HEIGHT = canvasRef.current.clientHeight
    const project = paper.project
    project.view.onMouseDown = () => {

    }
    project.view.onFrame = () => {
      boids.forEach((boid) => {
        boid.run(boids, false)
      })
    }
    project.view.onMouseDrag = () => {
      
    }
    console.log(paper)
  }
  const randomPoint = () => {
    return new paper.Point(WIDTH * Math.random(), HEIGHT * Math.random())
  }
  const drawTadpoles = () => {
    console.log('drawTadpoles>>>')
    for (let i = 0; i < 5; i++) {
      console.log('i>>>', i)
      const location = randomPoint()
      const boid = new Boid(location, 10, 0.05)
      console.log('boid>>>', boid)

      boids.push(boid)
    }
    console.log('boids>>>', boids)
  }
  useEffect(() => {
    initCanvas()
    drawTadpoles()
  }, [])

  return (
    <div className='TadpolesComponent'>
      <canvas ref={ canvasRef } className="main_canvas" />
    </div>
  )
}

export default TadpolesComponent