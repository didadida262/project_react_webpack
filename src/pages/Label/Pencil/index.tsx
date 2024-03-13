import './index.scss'
import React, { useRef } from 'react'
import { Button } from 'antd';
import { RiseOutlined } from '@ant-design/icons';
import paper from 'paper'

const PencilComponent = () => {
  const path = useRef({})
  const handleClick = () => {
    const pencil = new paper.Tool()
    pencil.onMouseDown = (e) => {
      console.log('down--pencil')
      path.current = new paper.Path(
        {
          strokeColor: 'black',
          strokeWidth: 5
        }
      )
    }
    pencil.onMouseDrag = (e) => {
      console.log('drag--pencil')
      path.current.add(e.point)
    }
    pencil.onMouseMove = (e) => {
      console.log('move--pencil')

    }
    pencil.onMouseUp = (e) => {
      console.log('up--pencil')
    }
  }
  return (
    <div className='pencil'>
      <Button
       style={{width: 80}} 
       icon={<RiseOutlined />}
       onClick={handleClick}></Button>
    </div>
  )
}

export default PencilComponent