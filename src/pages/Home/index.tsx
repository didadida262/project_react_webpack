
import React from 'react';
import { useState, memo, useEffect, useContext } from 'react';
import ChildComponent from './ChildrenComponent';
import {TextContext} from '../Layout'
// const MemoSon = memo(ChildComponent)

const HomeComponent = () => {
  console.log(useContext(TextContext))
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
      <div>我是HomeComponent...</div>
      {/* <MemoSon name={name}/> */}
      <ChildComponent name={name}/>
    </div>
  )
}

export default HomeComponent