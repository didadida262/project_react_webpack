/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-07-31 10:32:27
 * @LastEditors: didadida262
 * @LastEditTime: 2024-10-24 16:11:58
 */
import { configureStore } from "@reduxjs/toolkit";

// import lightDarkModeReducer from './mouduls/lightDarkMode'
import userReducer from "./mouduls/user";
import waferReducer from "./wafer/waferSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    wafer: waferReducer

    // lightDarkMode: lightDarkModeReducer
  }
});

export default store;
