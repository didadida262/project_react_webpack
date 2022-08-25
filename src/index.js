/*
 * @Author: Hhvcg
 * @Date: 2022-08-25 16:19:45
 * @LastEditors: -_-
 * @Description:
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

const AppView = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(AppView, document.getElementById('root'))
