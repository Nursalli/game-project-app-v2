import { configureStore } from "@reduxjs/toolkit";

import appReducer from "../reducer/app.reducer";

const store = configureStore({
  reducer: {
    app: appReducer,
  },
  devTools: true,
});

export default store;
