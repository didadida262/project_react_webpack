import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import { decrement, increment } from '../../store/mouduls/counterStoreA';
import { fetchData } from '../../store/mouduls/counterStoreB';
import { useEffect } from 'react';

const HomeComponent = () => {
  return (
      <div>
          <div>我是HomeComponent...</div>
      </div>
  )
}

export default HomeComponent