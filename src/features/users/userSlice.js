import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { isLogin: false },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
    },

    logout: (state, action) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
