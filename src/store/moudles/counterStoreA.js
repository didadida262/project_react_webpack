
// 同步请求
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const counterStore = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment(state, value) {
            state.count = state.count + value.payload
        },
        decrement(state, value) {
            state.count = state.count - value.payload
        }
    }
})

const { increment, decrement } = counterStore.actions
const reducer = counterStore.reducer

const fetchData = (dispatch) => {
    return async () => {
      const response = await axios.get('/api/v1/dataSource');
      console.log('res>>>', response)
      dispatch(decrement(1000))
    }
}

export { increment, decrement, fetchData}
export default reducer