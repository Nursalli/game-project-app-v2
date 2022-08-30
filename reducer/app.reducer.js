import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: { isLoading: false, isError: false, errMsg: null },
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setIsError: (state, { payload }) => {
      state.isError = payload;
    },
    setErrMsg: (state, { payload }) => {
      state.errMsg = payload;
    },
  },
});

export const { setIsLoading, setIsError, setErrMsg } = appSlice.actions;
export default appSlice.reducer;
