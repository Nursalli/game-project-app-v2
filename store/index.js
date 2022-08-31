import { configureStore } from "@reduxjs/toolkit";

import appReducer from "../reducer/app.reducer";
import userReducer from "../reducer/user.reducer";
import gameReducer from "../reducer/game.reducer";

const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    game: gameReducer,
  },
  devTools: true,
});

export default store;
