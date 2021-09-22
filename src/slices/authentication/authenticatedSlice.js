import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false
}

export const authenticatedSlice = createSlice({
  name: "authenticated",
  initialState,
  reducers: {
    isAuthenticated: (state, { payload }) => {
      state.loggedIn = payload;
    }
  }
})

export const { isAuthenticated } = authenticatedSlice.actions

export default authenticatedSlice.reducer