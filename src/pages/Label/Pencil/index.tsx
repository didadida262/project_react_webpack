import './index.scss'
import React, { useRef, useEffect} from 'react'
import { Button } from 'antd';
import paper from 'paper'



const PencilComponent = (props) => {
  const { activeTool, onClick, submitPath, categories } = props
  const name = 'pencil'
  console.warn('子组件B')
  let path = {} as any

  const initTool = () => {
    let tool = new paper.Tool()
    tool.onMouseDown = (e) => {
      path = new paper.Path(
        {
          strokeColor: 'black',
          strokeWidth: 5
        }
      )
      path.add(e.point)

    }
    tool.onMouseDrag = (e) => {
      path.add(e.point)
    }
    tool.onMouseMove = (e) => {
    }
    tool.onMouseUp = (e) => {
      path.add(e.point)
      const resPath = path.clone()
      // const newPath = {
      //   key: categories.length,
      //   path: resPath
      // }
      submitPath(resPath)
      path.remove()
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
        className={ activeTool === 'pencil' ? 'active' : ''}
        style={{ width: 80}} 
        onClick={ () => onClick(name) }>
         <i className="fa fa-pencil"></i> 
       </Button>
    </div>
  )
}

export default PencilComponent