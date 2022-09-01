import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { token: "", id: "", email: "", name: "", profilePic: "" },
  reducers: {
    setStateToken: (state, { payload }) => {
      state.token = payload;
    },
    setStateId: (state, { payload }) => {
      state.id = payload;
    },
    setStateEmail: (state, { payload }) => {
      state.email = payload;
    },
    setStateName: (state, { payload }) => {
      state.name = payload;
    },
    setStateProfilePic: (state, { payload }) => {
      state.profilePic = payload;
    },
  },
});

export const { setStateToken, setStateEmail, setStateName, setStateProfilePic, setStateId } = userSlice.actions;
export default userSlice.reducer;
