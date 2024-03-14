import './index.scss'
import React, { useRef, useEffect} from 'react'
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import paper from 'paper'

const PencilComponent = () => {
  const tool = useRef({}) as any
  const path = useRef({}) as any
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
  const initTool = () => {
    tool.current.onMouseDown = (e) => {
      console.log('down--pencil')
    }
    tool.current.onMouseDrag = (e) => {
      console.log('drag--pencil')
      path.current.add(e.point)
    }
    tool.current.onMouseMove = (e) => {
      console.log('move--pencil')

    }
    tool.current.onMouseUp = (e) => {
      console.log('up--pencil')
    }
  }

  useEffect(() => {
  
  }, [])
  return (
    <div className='pencil mgb10'>
      <Button
       style={{width: 80}} 
       icon={<EditOutlined />}
       onClick={handleClick}>
       </Button>
    </div>
  )
}

export default PencilComponent