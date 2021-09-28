import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: [],
  },
  reducers: {
    addItemToWishlist(state, action) {
      const newItem = action.payload;
      const existingItem = state.wishlistItems.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.wishlistItems.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromWishlist(state, action) {
      const id = action.payload;
      const existingItem = state.wishlistItems.find((item) => item.id === id);
      if (existingItem.quantity > 0) {
        state.wishlistItems = state.wishlistItems.filter((item) => item.id !== id);
      }
    }

  },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice;
