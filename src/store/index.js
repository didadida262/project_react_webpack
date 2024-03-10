import { configureStore } from "@reduxjs/toolkit";
import userReducer from './mouduls/user'

const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default store