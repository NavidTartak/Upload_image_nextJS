import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  name: "John",
  lastname: "Doe",
  phoneNumber: "09121111111",
  profileImage: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setUserData: (state, action) => {
      state.name = action.payload.name;
      state.lastname = action.payload.lastname;
      state.phoneNumber = action.payload.phoneNumber;
      state.profileImage = action.payload.profileImage;
      return state;
    },
    setUserProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
  },
});
export const { setUserData, setUserProfileImage } = userSlice.actions;
export default userSlice.reducer;
