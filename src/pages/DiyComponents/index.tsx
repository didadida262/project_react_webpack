/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-03-14 00:47:07
 * @LastEditors: didadida262
 * @LastEditTime: 2024-07-16 18:33:04
 */

import React from 'react';
import { useState, memo, useEffect, useContext } from 'react';

import {ButtonCommon, EButtonType} from '../../components/ButtonCommon'
import TypeWriter from '../../components/TypeWriter';

// const MemoSon = memo(ChildComponent)

const DiyComponents = () => {
  console.log('父组件渲染')
  let [name] = useState('hhvcg')
  useEffect(() => {
    console.log('父组件-effect')
    return () => {
      console.log('父组件-destroy')
    }
  }, [])

  return (
    <div>
      <div></div>
      <TypeWriter text='公共组件库' className={""}  />

      {/* <MemoSon name={name}/> */}
      <ButtonCommon
        type={EButtonType.PRIMARY}
        onClick={(e) => {
          console.log('Click')
          e.stopPropagation()
        }}
        >
          <span>测试按钮</span>
        </ButtonCommon>
    </div>
  )
}

export default DiyComponents