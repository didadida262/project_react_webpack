import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './moudles/counterStoreA'

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store