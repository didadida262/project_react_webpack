import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import { decrement, increment } from '../../store/mouduls/counterStoreA';
import { fetchData } from '../../store/mouduls/counterStoreB';
import { useEffect } from 'react';

const HomeComponent = () => {
  const { count } = useSelector((state: any) => state.counter)
  const { channelList } = useSelector((state: any) => state.channel)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData() as any)
    console.log('..........')
  console.log('channelList>>>', channelList)
  }, [])
  console.log('count:', count)

  return (
      <div>
          <div>我是HomeComponent...</div>
          <Button onClick={() => dispatch(decrement(10))}>减减</Button>
          <Button onClick={() => dispatch(increment(10))}>加加</Button>
          <span>{count}</span>
      </div>
  )
}

export default HomeComponent