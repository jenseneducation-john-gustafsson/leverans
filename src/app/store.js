import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cart/cartSlice";
import authenticatedReducer from "../slices/authentication/authenticatedSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    authenticated: authenticatedReducer
  },
})