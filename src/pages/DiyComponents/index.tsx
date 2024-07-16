/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-03-14 00:47:07
 * @LastEditors: didadida262
 * @LastEditTime: 2024-07-16 19:43:13
 */

import React from 'react';
import { useState, memo, useEffect, useContext } from 'react';

import {ButtonCommon, EButtonType} from '../../components/ButtonCommon'
import {Card } from '../../components/Card'
import TypeWriter from '../../components/TypeWriter';
import pattern from '../../styles/pattern';

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
    <div className='h-full'>
      <div className={`w-full ${pattern.flexCenter} h-[80px]`}>
      <span className='text-textFirstSize'>公共组件库</span>
      </div>
      <div className={`px-[16px] w-full h-[calc(100%_-_80px)]  grid gap-[22px] grid-cols-[repeat(auto-fill,minmax(270px,1fr))]`}>
      {/* <MemoSon name={name}/> */}
      <Card>
        <ButtonCommon
          type={EButtonType.PRIMARY}
          onClick={(e) => {
            console.log('Click')
            e.stopPropagation()
          }}
          // className='markBorderG'
          >
            <span>测试按钮</span>
          </ButtonCommon>
      </Card>
      <Card>
        <TypeWriter text='测试文本' className={" text-textFirstSize"}  />
      </Card>
      <Card>
        <ButtonCommon
          type={EButtonType.PRIMARY}
          onClick={(e) => {
            console.log('Click')
            e.stopPropagation()
          }}
          // className='markBorderG'
          >
            <span>测试按钮</span>
          </ButtonCommon>
      </Card>
      <Card>
        <ButtonCommon
          type={EButtonType.PRIMARY}
          onClick={(e) => {
            console.log('Click')
            e.stopPropagation()
          }}
          // className='markBorderG'
          >
            <span>测试按钮</span>
          </ButtonCommon>
      </Card>

      </div>


    </div>
  )
}

export default DiyComponents