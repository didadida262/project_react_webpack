import { createBrowserRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import LoginComponent from '../pages/Login'
import LayoutComponent from '../pages/Layout'
import HomeComponent from '../pages/Home'
import NotfoundComponent from '../pages/Notfound'
import AuthRoute from '../components/AuthRoute'
import LabelComponent from '../pages/Label'
<<<<<<< HEAD
=======
import TadpolesComponent from '../pages/Tadpoles'
import React from 'react'
>>>>>>> 481587ff3bbf71445e17a96d3b4ea9c5e887f977

// 路由懒加载
const About = lazy(() => import('../pages/About'))


const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute><LayoutComponent/></AuthRoute>,
    children: [
      {
        index: true,
        element: <HomeComponent/>
      },
      {
        path: 'home',
        element: <HomeComponent/>
      },
      {
        path: 'about',
        element: <Suspense fallback={'加载中'}><About/></Suspense>
<<<<<<< HEAD
=======
      },
      {
        path: '/tadpoles',
        element: <TadpolesComponent />
>>>>>>> 481587ff3bbf71445e17a96d3b4ea9c5e887f977
      }
    ]
  },
  {
    path: 'label',
    element: <LabelComponent />
  },
  {
    path: '/login',
    element: <LoginComponent/>
  },
  {
    path: '/label',
    element: <LabelComponent/>
  },
  {
    path: '*',
    element: <NotfoundComponent />
  }
])

export default router