import './index.scss'
import React, { useRef, useEffect} from 'react'
import { Button } from 'antd';
import { BorderOutlined } from '@ant-design/icons';
import paper from 'paper'
import { getRandomColor } from '../../../utils/common_weapons';

const ReactComponent = () => {
  const tool = useRef({}) as any
  const path = useRef({}) as any
  const first = useRef({}) as any
  const color = useRef({}) as any
  const handleClick = () => {
      tool.current = new paper.Tool()
      initTool()
      tool.current.activate()
      path.current = new paper.Path(
        {
          strokeColor: 'black',
          strokeWidth: 5
        }
      )
  }
  const removeSelection = () => {
    if (path.current) {
      path.current.remove()
      path.current = null
    }
  }
  const initTool = () => {
    tool.current.onMouseDown = (e) => {
      console.log('down--react')
      first.current = e.point
      color.current = getRandomColor()
    }
    tool.current.onMouseDrag = (e) => {
      console.log('drag--react')
      removeSelection()
      const width = e.point.x - first.current.x
      const height = e.point.y - first.current.y
      path.current = new paper.Path.Rectangle(new paper.Point(first.current.x, first.current.y), new paper.Size(width, height))
      path.current.selected = true
      path.current.fillColor = color.current



    }
    tool.current.onMouseMove = (e) => {
      console.log('move--react')

    }
    tool.current.onMouseUp = (e) => {
      console.log('up--react')
    }
  }

  useEffect(() => {
  
  }, [])
  return (
    <div className='pencil'>
      <Button
       style={{width: 80}} 
       icon={ <BorderOutlined /> }
       onClick={handleClick}></Button>
    </div>
  )
}

export default ReactComponent