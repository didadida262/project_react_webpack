import React, { useState, useRef, useEffect } from 'react'
import './style.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/moudles/counterStoreA';

interface IProps {
  uids: Array<number>
}

export default function ComputerComponent(props: IProps) {
  const [show, setshow] = useState(true)
  const { count } = useSelector((state: any) => state.counter)
  const dispatch = useDispatch()
  console.log('count>>>',count)
  
  const handleClick = () => {
    setshow(!show)
  }
  useEffect(() => {
    const getInfo = async () => {
      const response = await axios.get('/api/v1/dataSource');
      console.log('data:', response)
    }
    getInfo()
  }, [])
  return (<div>
    { show && <div className='test'>我是div</div>}
    <button onClick={handleClick}>toggle</button>
    <div>
    <button onClick={() => {dispatch(decrement(10))}}>-</button>
    {count}
    <button onClick={() => {dispatch(increment(10))}}>+</button>

    </div>
  </div>) 
}