import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  status: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.status = true;
    },
    loginError: (state, action) => {
      state.error = action.payload;
      state.status = false;
    },
    logout: (state) => {
      (state.user = null), (state.status = false);
    },
  },
});

export const { login, loginError, logout } = authSlice.actions;

export default authSlice.reducer;
