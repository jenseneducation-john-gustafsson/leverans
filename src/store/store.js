import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import authenticatedSlice from "./authenticatedSlice";
import wishlistSlice from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    authenticated: authenticatedSlice.reducer,
    wishlist: wishlistSlice.reducer
  },
})