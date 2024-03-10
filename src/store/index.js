import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './mouduls/counterStoreA'
import channelReducer from './mouduls/counterStoreB'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        channel: channelReducer
    }
})

export default store