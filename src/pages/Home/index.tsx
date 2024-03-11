import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import { decrement, increment } from '../../store/mouduls/counterStoreA';
import { fetchData } from '../../store/mouduls/counterStoreB';
import { useEffect, useMemo, useState, memo } from 'react';
import ChildComponent from './ChildrenComponent';


const MemoSon = memo(ChildComponent)

const HomeComponent = () => {
  console.log('组件渲染')
  let [count, setCount] = useState(10)
  let [count2, setCount2] = useState(10)
  let [name, setName] = useState('hhvcg')
  const res = () => {
    console.log('重新计算')
  }
  const add = (val) => {
    const newVal = count + val
    setCount(newVal)
    setCount(newVal)
  }
  return (
    <div>
      <div>我是HomeComponent...</div>
      <MemoSon name={name}/>
    </div>
  )
}

export default HomeComponent