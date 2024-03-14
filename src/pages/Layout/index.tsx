import './index.scss'
import Menu from '../menu'
import ContentComponent from '../Content'
import HeaderComponent from '../Header'
import React from 'react'

export const TextContext = React.createContext('测试数据')
const LayoutComponent = () => {
  return (
    <TextContext.Provider value="dark">
    <div className='layout flex-col-sb'>
      <div className='header'>
      <HeaderComponent />
      </div>
      <div className='view flex-sb'>
        <div className='menu'>
          <Menu />
        </div>
        <div className='content'>
          <ContentComponent />
        </div>
      </div>
    </div>
    </TextContext.Provider>
  )
}

export default LayoutComponent