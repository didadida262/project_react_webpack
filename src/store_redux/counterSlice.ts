// store/counterSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getInfo } from "@/server/testpageAPI";

// 异步action
export const fetchCounterAsync: any = createAsyncThunk(
  "counter/fetchCounter",
  async () => {
    const response = await getInfo();
    return await response;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    status: "idle"
  },
  reducers: {
    increment: (state, action) => {
      state.value = action.payload; // 同步操作
    },
    decrement: (state, action) => {
      state.value = action.payload; // 同步操作
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCounterAsync.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchCounterAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value = action.payload.data.word;
      })
      .addCase(fetchCounterAsync.rejected, state => {
        state.status = "failed";
      });
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
