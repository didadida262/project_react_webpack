import './index.scss'
import React, { useRef, useEffect} from 'react'
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import paper from 'paper'

const PencilComponent = () => {
  let path = {} as any
  const handleClick = () => {
      initTool()
      initPath()
  }
  const initTool = () => {
    let tool = new paper.Tool()
    tool.onMouseDown = (e) => {
      console.log('down--pencil')
    }
    tool.onMouseDrag = (e) => {
      console.log('drag--pencil')
      path.add(e.point)
    }
    tool.onMouseMove = (e) => {
      console.log('move--pencil')
    }
    tool.onMouseUp = (e) => {
      console.log('up--pencil')
    }
  }
  const initPath = () => {
    path = new paper.Path(
      {
        strokeColor: 'black',
        strokeWidth: 5
      }
    )
  }

  useEffect(() => {
    return () => {
    }
  }, [])
  return (
    <div className='pencil mgb10'>
      <Button
        style={{ width: 80 }} 
        icon={ <EditOutlined />}
        onClick={ handleClick }>
       </Button>
    </div>
  )
}

export default PencilComponent