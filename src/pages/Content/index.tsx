import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import { decrement, increment } from '../../store/mouduls/counterStoreA';
import { fetchData } from '../../store/mouduls/counterStoreB';
import { useEffect, useMemo, useState, memo } from 'react';



const ContentComponent = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}

export default ContentComponent