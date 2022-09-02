import { createSlice } from "@reduxjs/toolkit";

const user = {
  id: null,
  email: "",
  firstName: "",
  lastName: "",
  profilePic: "",
  bio: "",
  birthday: "1900-01-01",
  country: "",
};

const profileEditSlice = createSlice({
  name: "profileEdit",
  initialState: {
    user: user,
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setFirstName: (state, { payload }) => {
      state.user.firstName = payload;
    },
    setLastName: (state, { payload }) => {
      state.user.lastName = payload;
    },
    setBio: (state, { payload }) => {
      state.user.bio = payload;
    },
    setCountry: (state, { payload }) => {
      state.user.country = payload;
    },
    setBirthday: (state, { payload }) => {
      state.user.birthday = payload;
    },
    setProfilePic: (state, { payload }) => {
      state.user.profilePic = payload;
    },
    setFile: (state, { payload }) => {
      state.file = payload;
    },
  },
});

export const {
  setUser,
  setFirstName,
  setLastName,
  setBio,
  setCountry,
  setBirthday,
  setProfilePic,
  setFile,
} = profileEditSlice.actions;
export default profileEditSlice.reducer;
