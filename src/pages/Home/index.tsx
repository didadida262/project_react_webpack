
import React from 'react';
import { useState, memo } from 'react';
import ChildComponent from './ChildrenComponent';

const MemoSon = memo(ChildComponent)

const HomeComponent = () => {
  console.log('组件渲染')
  let [name] = useState('hhvcg')

  return (
    <div>
      <div>我是HomeComponent...</div>
      <MemoSon name={name}/>
    </div>
  )
}

export default HomeComponent