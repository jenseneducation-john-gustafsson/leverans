import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  userEmail: ""
}

export const authenticatedSlice = createSlice({
  name: "authenticated",
  initialState,
  reducers: {
    isAuthenticated: (state, { payload }) => {
      state.loggedIn = payload;
    },
    authUsername: (state, { payload }) => {
      state.userEmail = payload.email
    }
  }
})

export const { isAuthenticated, authUsername } = authenticatedSlice.actions

export default authenticatedSlice