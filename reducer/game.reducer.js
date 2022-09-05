import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: { runningGame: "" },
  reducers: {
    setRunningGame: (state, { payload }) => {
      state.runningGame = payload;
    },
  },
});

export const { setRunningGame } = gameSlice.actions;
export default gameSlice.reducer;
