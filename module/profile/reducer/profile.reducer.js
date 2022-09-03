import { createSlice } from "@reduxjs/toolkit";

const badgesPoints = {
  userId: null,
  userEmail: "",
  userFirstName: "",
  badge: "",
  points: 0,
  userProfilePic: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    histories: [],
    badgesPoints: badgesPoints,
    myGames: [],
  },
  reducers: {
    setHistories: (state, { payload }) => {
      state.histories = payload;
    },
    setBadgesPoints: (state, { payload }) => {
      state.badgesPoints = payload;
    },
    setMyGames: (state, { payload }) => {
      state.myGames = payload;
    },
  },
});

export const { setHistories, setBadgesPoints, setMyGames } =
  profileSlice.actions;
export default profileSlice.reducer;
