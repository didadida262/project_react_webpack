import React from 'react'
import paper from 'paper'
import { useEffect, useRef } from 'react'
import './index.scss'
import { randomPoint, getRandomDirection } from '../../utils/paperjsWeapon'
import { Tank } from './Tank'

const TankComponent = (props) => {
  const canvasRef = useRef(null) as any
  const enemies = [] as any
  let WIDTH = 0
  let HEIGHT = 0
  let tank = null as any

  const onKeyDown = (e) => {
    if (e.key === ' ') {
      tank.fire()
    } else {
      tank.handleChangePosition(e, WIDTH, HEIGHT)
    }
  }
  const initCanvas = () => {
    paper.setup(canvasRef.current)
    WIDTH = canvasRef.current.clientWidth
    HEIGHT = canvasRef.current.clientHeight
    const project = paper.project
    project.view.onMouseDown = () => {

    }
    project.view.onFrame = () => {
      tank.AmmunitionDepo.forEach((ammunition) => {
        // 若越界，消除之
        let newP = ammunition.path.position.add(tank.direction)
        if (!judeBoundary(newP)) {
          ammunition.updateLocation(newP)
        } else {
          ammunition.path.remove()
          ammunition = null
        }
        newP = null
        // ammunition.position = new paper.Point(ammunition.position.x, ammunition.position.y - 10).clone()
      })

      enemies.forEach((enemy) => {
        enemy.autoRun(tank.path.position)
      })
    }
    project.view.onMouseDrag = () => {
      
    }
    project.view.onMouseMove = (e) => {
      const from = tank.path.children['base'].position
      const vector = e.point.subtract(from).normalize(60)
      tank.direction = vector 
      const vector_end = from.add(vector)
      const turret = tank.path.children['turret']
      turret.replaceWith(new paper.Path(
        {
          name: 'turret',
          segments: [from, vector_end],
          strokeWidth: 5,
          strokeColor: 'white',
          strokeCap: 'round'
        }
      ))
    }
  }
  const judeBoundary = (position) => {
    if (position.x <= 0 || position.x >= WIDTH || position.y <= 0 || position.y >= HEIGHT) {
      return true
    } else {
      return false
    }
  }
  const initRole = () => {
    const position = randomPoint(WIDTH, HEIGHT)
    const end = getRandomDirection(position, 50)
    const direction = end.subtract(position)
    tank = new Tank(position, 'white', direction)
  }
  const initEnemy = () => {
    for (let i = 0; i < 6; i++) {
      const position = randomPoint(WIDTH, HEIGHT)
      enemies.push(new Tank(position, 'red'))
    }
  }

  useEffect(() => {
    initCanvas()
    initRole()
    initEnemy()
    window.addEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className='TankComponent'>
      <canvas ref={ canvasRef } className="main_canvas" />
    </div>
  )
}

export default TankComponent