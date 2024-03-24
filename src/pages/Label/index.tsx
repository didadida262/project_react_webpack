import './index.scss'
import React, { useEffect, useState } from 'react'
// import ToolsComponent from './Tools'
import DrawComponent from './Draw'
import Pencil from './Pencil'
import Rect from './Rect'
import Pointer from './Pointer'
import PathItem from './PathItem'
import { message } from 'antd'
import Brush from './Brush'

interface ICateItem {
  key: number,
  name: string
}

const LabelComponent = () => {
  const [activeTool, setactiveTool] = useState('pencil')
  const [categories, setcategories] = useState([]) as any
  const [currentPath, setcurrentPath] = useState(null) as any

  const handleClickTool = (tool) => {
    setactiveTool(tool)
    message.success(`激活${tool}`)
  }
  useEffect(() => {
    console.log(currentPath)
    if (currentPath) {
      const len = categories.length
      const newPath = {
        key: len,
        name: `标注数据:${len + 1}`,
        path: currentPath
      }
      setcategories((prevItems) => [...prevItems, newPath]);
    }
  }, [currentPath])
  const submitPath = (data) => {
    setcurrentPath(data)
  }
  return (
    <div className='label flex-sb'>
      <div className='tools-container pd10'>
        <Pointer
         activeTool={activeTool}
         onClick={handleClickTool}
         />
        <Pencil
         activeTool={activeTool}
         onClick={handleClickTool}
         submitPath={submitPath}
         />
        <Rect
          activeTool={activeTool}
          onClick={handleClickTool}
          submitPath={submitPath}
         />
        <Brush
          activeTool={activeTool}
          onClick={handleClickTool}
          submitPath={submitPath}
         />
      </div>
      <div className='view-container'>
        <DrawComponent
          activeTool={activeTool}
          />
      </div>
      <div className='category-container'>
        <PathItem data={categories}/>
>>>>>>> 481587ff3bbf71445e17a96d3b4ea9c5e887f977
      </div>
    </div>
  )
}

export default LabelComponent