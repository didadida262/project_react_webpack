import React, { useState, useRef, useEffect } from 'react'
import './style.css'
import axios from 'axios';

interface IProps {
  uids: Array<number>
}

export default function ComputerComponent(props: IProps) {
  const [show, setshow] = useState(true)
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
  </div>) 
}