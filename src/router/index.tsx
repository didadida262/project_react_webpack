/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-03-25 15:13:17
 * @LastEditors: didadida262
 * @LastEditTime: 2024-07-16 18:27:40
 */

import { Suspense, lazy } from 'react'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import AuthRoute from '../components/AuthRoute'
import ChatGpt from '../pages/ChatGpt'
import DiyComponents from '../pages/DiyComponents'
import HomeComponent from '../pages/Home'
import LabelComponent from '../pages/Label'
import LayoutComponent from '../pages/Layout'
import LoginComponent from '../pages/Login'
import NotfoundComponent from '../pages/Notfound'
import TadpolesComponent from '../pages/Tadpoles'
import TankComponent from '../pages/Tank'
import TestCss from '../pages/TestCss'
import ThreejsComponent from '../pages/Threejs'

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
        path: 'diycomponent',
        element: <DiyComponents />
      },
      {
        path: 'about',
        element: <Suspense fallback={'加载中'}><About/></Suspense>
      },
      {
        path: 'threejs',
        children: [
          {
            path: 'threejstest',
            element: <ThreejsComponent />
          }
        ]
      },
      {
        path: 'ChatGpt',
        element: <ChatGpt />
      },
      {
        path: 'testcss',
        element: <TestCss />
      },
      {
        path: '/tadpoles',
        element: <TadpolesComponent />
      },
      {
        path: '/tank',
        element: <TankComponent />
      }
    ]
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