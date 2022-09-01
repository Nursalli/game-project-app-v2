import { configureStore } from "@reduxjs/toolkit";

import appReducer from "../reducer/app.reducer";
import userReducer from "../reducer/user.reducer";
import gameReducer from "../reducer/game.reducer";
import profileEditReducer from "../pages/profile/profile-edit/reducer/profile-edit.reducer";

const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    game: gameReducer,
    profileEdit: profileEditReducer,
  },
  devTools: true,
});

export default store;
