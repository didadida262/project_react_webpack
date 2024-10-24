/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-10-24 15:30:01
 * @LastEditors: didadida262
 * @LastEditTime: 2024-10-24 16:26:37
 */
// store/waferSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getInfo } from "@/server/testpageAPI";
import { getWaferInfo, getWaferDotInfo } from "@/server/waferAPI";

// 异步action
export const fetchWaferInfoAsync: any = createAsyncThunk(
  "waferInfo/fetchWaferInfoAsync",
  async () => {
    const response = await getWaferInfo();
    return await response;
  }
);
export const fetchWaferDotDataAsync: any = createAsyncThunk(
  "wafer/fetchWaferDotDataAsync",
  async () => {
    const response = await getWaferDotInfo();
    return await response;
  }
);

const waferSlice = createSlice({
  name: "wafer",
  initialState: {
    waferInfo: {},
    dotData: [],
    status: "idle"
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWaferInfoAsync.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchWaferInfoAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.waferInfo = action.payload.data;
      })
      .addCase(fetchWaferInfoAsync.rejected, state => {
        state.status = "failed";
      })
      .addCase(fetchWaferDotDataAsync.fulfilled, (state, action) => {
        console.log("action>>>", action.payload);
        state.dotData = action.payload.data;
      });
  }
});

// export const { increment, decrement } = waferSlice.actions;
export default waferSlice.reducer;
