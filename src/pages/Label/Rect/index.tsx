import './index.scss'
import React, { useRef, useEffect} from 'react'
import { Button } from 'antd';
import { BorderOutlined } from '@ant-design/icons';
import paper from 'paper'
import { getRandomColor } from '../../../utils/common_weapons';

const RectComponent = (props) => {
  const { activeTool, onClick, submitPath } = props
  const name = 'rect'
  let path = {} as any
  let first = new paper.Point(0, 0)
  let color = ''
  const removeSelection = () => {
    if (path) {
      path.remove()
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
      first = e.point
      color = getRandomColor()
    }
    tool.onMouseDrag = (e) => {
      removeSelection()
      const width = e.point.x - first.x
      const height = e.point.y - first.y
      path = new paper.Path.Rectangle(new paper.Point(first.x, first.y), new paper.Size(width, height))
      path.fillColor = color
    }
    tool.onMouseMove = (e) => {
    }
    tool.onMouseUp = (e) => {
      path.add(e.point)
      submitPath(path.clone())
      path.remove()
    }
    tool.activate()
  }

  useEffect(() => {
  
  }, [])
  useEffect(() => {
    if (activeTool === name) {
      initTool()
    }
  }, [activeTool])
  return (
    <div className='rect mgb10'>
      <Button
        className={ activeTool === 'rect' ? 'active' : ''}
       style={{width: 80}} 
       icon={ <BorderOutlined /> }
       onClick={() => onClick(name)}>
         {/* <i className="fa fa-square-o"></i>  */}
       </Button>
    </div>
  )
}

export default RectComponent