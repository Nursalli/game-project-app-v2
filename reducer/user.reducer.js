import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { token: "", email: "", firsName: "" },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
  },
});

export const { setToken } = userSlice.actions;
export default userSlice.reducer;
