import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
}

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {


    // CHANGE "PAYLOAD" ATTRIBUTES TARGETED WHEN LOOPING THROUGH CART ITEMS TO FIT FILM ATTRIBUTES USED IN APP


    addItem: (state, { payload }) => {
      if (state.cart == null) {

        return state.cart.push(payload);

      } else {
        for (let existingProducts in state.cart) {
          if (
            payload.color === state.cart[existingProducts].color &&
            payload.name === state.cart[existingProducts].name &&
            payload.size === state.cart[existingProducts].size
          ) {

            return state.cart[existingProducts].quantity++;

          } else {
            continue;
          }
        }
        return state.cart.push(payload);
      }
    },
    subtractItem: (state, { payload }) => {
      for (let product in state.cart) {
        if (
          payload.color === state.cart[product].color &&
          payload.name === state.cart[product].name &&
          payload.size === state.cart[product].size
        ) {
          if (state.cart[product].quantity > 1) {
            return state.cart[product].quantity--;
          } else {
            continue;
          }
        }
      }
    },
    removeItem: (state, { payload }) => {
      state.cart = state.cart.filter(function (item) {
        return (
          item.name !== payload.name ||
          item.color !== payload.color ||
          item.size !== payload.size
        );
      });
    },
    clearCart: (state, { payload }) => {
      state.cart = payload;
    }
  }
})

export const { addItem, subtractItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer