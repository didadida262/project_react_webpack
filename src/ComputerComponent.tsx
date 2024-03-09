import React, { useState, useRef, useEffect } from 'react'
import './style.css'
interface IProps {
  uids: Array<number>
}
export default function ComputerComponent(props: IProps) {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return (<div>
    <button onClick={handleClick}>{count}</button>
    <div className='test'>asdadasdasdasd</div>
  </div>) 
}