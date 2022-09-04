import { configureStore } from "@reduxjs/toolkit";

import appReducer from "../reducer/app.reducer";
import userReducer from "../reducer/user.reducer";
import gameReducer from "../reducer/game.reducer";
import profileEditReducer from "../module/profile/reducer/profile-edit.reducer";
import profileReducer from "../module/profile/reducer/profile.reducer";

const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    game: gameReducer,
    profileEdit: profileEditReducer,
    profile: profileReducer,
  },
  devTools: true,
});

export default store;
