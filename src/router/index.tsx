/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-03-25 15:13:17
 * @LastEditors: didadida262
 * @LastEditTime: 2024-12-02 17:41:22
 */

import { Suspense, lazy } from "react";
import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Earth from "@/pages/Earth";
import WaferComponent from "@/pages/WaferComponent";

import AuthRoute from "../components/AuthRoute";
import CardGame from "../pages/CardGame";
import ChatGpt from "../pages/ChatGpt";
import DiyComponents from "../pages/DiyComponents";
import HomeComponent from "../pages/Home";
import LabelComponent from "../pages/Label";
import LayoutComponent from "../pages/Layout";
import LoginComponent from "../pages/Login";
import NotfoundComponent from "../pages/Notfound";
import TadpolesComponent from "../pages/Tadpoles";
import TankComponent from "../pages/Tank";
import TestCss from "../pages/TestCss";
import ThreejsComponent from "../pages/Threejs";
import YourLife from "../pages/YourLife";

// 路由懒加载
const Test = lazy(() => import("../pages/Test"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRoute>
        <LayoutComponent />
      </AuthRoute>
    ),
    children: [
      {
        index: true,
        element: <HomeComponent />
      },
      {
        path: "yourlife",
        element: <YourLife />
      },
      {
        path: "home",
        element: <HomeComponent />
      },
      {
        path: "diycomponent",
        element: <DiyComponents />
      },
      {
        path: "wafer",
        element: <WaferComponent />
      },
      {
        path: "cardgame",
        element: <CardGame />
      },

      {
        path: "test",
        element: (
          <Suspense fallback={"加载中"}>
            <Test />
          </Suspense>
        )
      },
      {
        path: "threejs",
        children: [
          {
            path: "threejstest",
            element: <ThreejsComponent />
          }
        ]
      },
      {
        path: "ChatGpt",
        element: <ChatGpt />
      },
      {
        path: "testcss",
        element: <TestCss />
      },
      {
        path: "earth",
        element: <Earth />
      },
      {
        path: "/tadpoles",
        element: <TadpolesComponent />
      },
      {
        path: "/tank",
        element: <TankComponent />
      }
    ]
  },

  {
    path: "/login",
    element: <LoginComponent />
  },
  {
    path: "/label",
    element: <LabelComponent />
  },
  {
    path: "*",
    element: <NotfoundComponent />
  }
]);
export default router;
