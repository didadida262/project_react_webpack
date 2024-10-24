/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-07-31 10:32:27
 * @LastEditors: didadida262
 * @LastEditTime: 2024-10-24 10:11:25
 */
import { createSlice } from "@reduxjs/toolkit";
import api from "@/server/axios";

const userStore = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("token") || ""
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    }
  }
});

const reducer = userStore.reducer;
const { setToken } = userStore.actions;

const fetchToken = data => {
  return async dispatch => {
    const res = (await api.post("/signIn", data)) as any;
    dispatch(setToken(res.token));
    localStorage.setItem("token", res.token);
  };
};

export default reducer;
export { setToken, fetchToken };
