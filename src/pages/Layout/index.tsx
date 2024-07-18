/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-03-14 00:47:07
 * @LastEditors: didadida262
 * @LastEditTime: 2024-07-18 15:02:59
 */
import React from 'react';

import pattern from '@/styles/pattern';

import LightDark from '../Botoperation';
import ContentComponent from '../Content';
import HeaderComponent from '../Header';
import Nav from '../menu';

export const TextContext = React.createContext('测试数据');
const LayoutComponent = () => {
  return (
    <TextContext.Provider value='dark'>
      <div className='layout flex-col-sb h-screen'>
        <div className='header w-full h-[60px] border-b-[1px] border-b-solid border-b-borderSecondColor'>
          <HeaderComponent />
        </div>
        <div className={`view h-[calc(100%_-_60px)] w-full ${pattern.flexbet}`}>
          <div className='w-[220px] h-full border-r-[1px] border-solid border-borderSecondColor'>
            <Nav className='w-full' />
            {/* <LightDark /> */}
          </div>
          <div className='w-[calc(100%_-_220px)] h-full bg-[#000000] pt-[10px] px-[20px]'>
            <ContentComponent />
          </div>
        </div>
      </div>
    </TextContext.Provider>
  );
};

export default LayoutComponent;
