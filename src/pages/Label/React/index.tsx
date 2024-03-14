import './index.scss'
import React, { useRef, useEffect} from 'react'
import { Button } from 'antd';
import { BorderOutlined } from '@ant-design/icons';
import paper from 'paper'
import { getRandomColor } from '../../../utils/common_weapons';

const ReactComponent = () => {
  let path = {} as any
  const resp: Array<object> = []
  let first = new paper.Point(0, 0)
  let color = ''
  const handleClick = () => {
      initTool()
  }
  const removeSelection = () => {
    if (path.current) {
      path.current.remove()
      path.current = null
    }
  }
  const initTool = () => {
    const tool =  new paper.Tool()
    tool.onMouseDown = (e) => {
      path = new paper.Path(
        {
          strokeColor: 'black',
          strokeWidth: 5
        }
      )
      console.log('down--react')
      first = e.point
      color = getRandomColor()
    }
    tool.onMouseDrag = (e) => {
      console.log('drag--react')
      removeSelection()
      const width = e.point.x - first.x
      const height = e.point.y - first.y
      path.current = new paper.Path.Rectangle(new paper.Point(first.x, first.y), new paper.Size(width, height))
      path.current.selected = true
      path.current.fillColor = color
    }
    tool.onMouseMove = (e) => {
      console.log('move--react')

    }
    tool.onMouseUp = (e) => {
      console.log('up--react')
      path.add(e.point)
      const resPath = path.clone()
      resp.push(path.clone())
      resPath.remove()
      path.remove()
    }
    tool.activate()
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