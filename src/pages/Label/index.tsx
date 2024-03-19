import './index.scss'
import React, { useEffect, useState } from 'react'
// import ToolsComponent from './Tools'
import DrawComponent from './Draw'
import Pencil from './Pencil'
import Rect from './Rect'
import Pointer from './Pointer'
import Category from './Category'
import { message } from 'antd'

interface ICateItem {
  key: number,
  name: string
}

const LabelComponent = () => {
  console.warn('父组件')
  const [activeTool, setactiveTool] = useState('pencil')
  const [categories, setcategories] = useState<ICateItem[]>([]) as any
  const [count, setcount] = useState(0)
  const [temp, settemp] = useState({}) as any

  const handleClickTool = (tool) => {
    setactiveTool(tool)
    message.success(`激活${tool}`)
  }
  const submitPath = (data) => {
    console.log('父组件接收到的path>>>1', data)
    console.log('父组件当前仓库path>>>2', categories)
    const newPath = {
      key: count,
      name: `标注数据:${count}`,
      path: data
    }
    console.log('newPath>>>', newPath)
    // // setcategories([...categories, newPath])
    setcount((precount) => precount + 1)
    settemp(newPath)
    // setcategories((prevItems) => [...prevItems, newPath]);
    console.log('父组件更新后的仓库path>>>2', categories)
  }
  useEffect(() => {
    if (Object.keys(temp).length) {
      const newPath = {
        key: count,
        name: `标注数据:${count}`,
        path: temp
      }
      setcategories((prevItems) => [...prevItems, newPath]);
      settemp({})
    }
  }, [count])
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
         categories={categories}
         />
        <Rect
          activeTool={activeTool}
          onClick={handleClickTool}
         />
      </div>
      <div className='view-container'>
        <DrawComponent />
      </div>
      <div className='category-container'>
        <Category data={categories}/>
      </div>
    </div>
  )
}

export default LabelComponent