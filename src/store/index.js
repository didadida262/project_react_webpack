import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './moudles/counterStoreA'
import channelReducer from './moudles/counterStoreB'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        channel: channelReducer
    }
})

export default store