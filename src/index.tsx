import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './common.scss';
import reportWebVitals from './reportWebVitals';
// redux
import store from './store'
import { Provider } from 'react-redux'
// router
import router from './router';
import { RouterProvider } from 'react-router-dom'
import 'font-awesome/less/font-awesome.less';
// import './mock/mock'
import { ThemeProvider } from './components/themeProvider'
  

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider>
    <Provider store={store}>
      <RouterProvider router={router} ></RouterProvider>
    </Provider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
