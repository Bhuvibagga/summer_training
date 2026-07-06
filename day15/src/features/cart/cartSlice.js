import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {

    addToCart: (state, action) => {

      const product = action.payload;

      const existing = state.cart.find(
        item => item.id === product.id
      );

      if (existing) {

        existing.quantity += 1;

      } else {

        state.cart.push({
          ...product,
          quantity: 1,
        });

      }

      state.totalItems = state.cart.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      state.totalPrice = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

    },

    increaseQuantity: (state, action) => {

      const item = state.cart.find(
        p => p.id === action.payload
      );

      if (item) {

        item.quantity++;

      }

      state.totalItems = state.cart.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      state.totalPrice = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

    },

    decreaseQuantity: (state, action) => {

      const item = state.cart.find(
        p => p.id === action.payload
      );

      if (item) {

        item.quantity--;

      }

      state.cart = state.cart.filter(
        item => item.quantity > 0
      );

      state.totalItems = state.cart.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      state.totalPrice = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

    },

    removeFromCart: (state, action) => {

      state.cart = state.cart.filter(
        item => item.id !== action.payload
      );

      state.totalItems = state.cart.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      state.totalPrice = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

    },

    clearCart: (state) => {

      state.cart = [];

      state.totalItems = 0;

      state.totalPrice = 0;

    },

  },

});

export const {

  addToCart,

  increaseQuantity,

  decreaseQuantity,

  removeFromCart,

  clearCart,

} = cartSlice.actions;

export default cartSlice.reducer;