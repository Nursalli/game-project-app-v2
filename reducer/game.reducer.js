import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: { runningGame: "", initGame: "", finalResult: "" },
  reducers: {
    setRunningGame: (state, { payload }) => {
      state.runningGame = payload;
    },
    setInitGame: (state, { payload }) => {
      state.initGame = payload;
    }
  },
});

export const { setRunningGame, setInitGame } = gameSlice.actions;
export default gameSlice.reducer;
