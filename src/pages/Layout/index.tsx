/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-03-14 00:47:07
 * @LastEditors: didadida262
 * @LastEditTime: 2024-07-16 20:50:03
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
      <div className='header w-full h-[80px] border-b-[1px] border-b-solid border-b-borderSecondColor'>
      <HeaderComponent />
      </div>
      <div className='view flex-sb h-[calc(100%_-_80px)] w-full'>
        <div className='sidebar flex flex-col justify-between'>
          <Menu />
          <LightDark />
        </div>
        <div className='w-[calc(100%_-_260px)] h-full'>
          <ContentComponent />
        </div>
      </div>
    </div>
    </TextContext.Provider>
  )
}

export default LayoutComponent