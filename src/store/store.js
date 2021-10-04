import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartSlice from "./cart-slice";
import authenticatedSlice from "./authenticatedSlice";
import wishlistSlice from "./wishlistSlice";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authenticated", "cart", "wishlist"]
}

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  authenticated: authenticatedSlice.reducer,
  wishlist: wishlistSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)