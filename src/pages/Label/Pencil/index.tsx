import './index.scss'
import React, { useRef, useEffect} from 'react'
import { Button } from 'antd';
import paper from 'paper'
import { judeToolExisted } from '../../../utils/paperjsWeapon'
import { BsPencil } from "react-icons/bs";
import pattern from '../../../styles/pattern';

const PencilComponent = (props) => {
  const { activeTool, onClick, submitPath } = props
  const name = 'pencil'
  let path = {} as any
  let tool = null as any
  const initTool = () => {
    console.log(`创建${name}-tool`)
    tool = new paper.Tool()
    tool.name = name
    tool.onMouseDown = (e) => {
      path = new paper.Path(
        {
          strokeColor: 'green',
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
      submitPath(path.clone())
      path.remove()
    }
    tool.activate()
  }
  const switchTool = () => {
    if (activeTool !== name) return
    if (!judeToolExisted(paper, name)) {
      initTool()
    }
  }

  useEffect(() => {
    return () => {
    }
  }, [])
  useEffect(() => {
    switchTool()
  }, [activeTool])
  return (
    <div className='pencil mgb10'>
      <Button
        className={`w-[80px] ${pattern.flexCenter} ${activeTool === name ? 'active': ''}`}
        onClick={ () => onClick(name) }>
         <BsPencil />
       </Button>
    </div>
  )
}

export default PencilComponent