/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-03-14 00:47:07
 * @LastEditors: didadida262
 * @LastEditTime: 2024-07-16 19:48:25
 */
import React from 'react'

import LightDark from '../Botoperation'
import ContentComponent from '../Content'
import HeaderComponent from '../Header'
import Menu from '../menu'

import './index.scss'

export const TextContext = React.createContext('测试数据')
const LayoutComponent = () => {
  return (
    <TextContext.Provider value="dark">
    <div className='layout flex-col-sb'>
      <div className='header'>
      <HeaderComponent />
      </div>
      <div className='view flex-sb'>
        <div className='sidebar flex flex-col justify-between'>
          <Menu />
          <LightDark />
        </div>
        <div className='w-[calc(100%_-_260px)] border-[1px] border-solid border-borderSecondColor h-full'>
          <ContentComponent />
        </div>
      </div>
    </div>
    </TextContext.Provider>
  )
}

export default LayoutComponent