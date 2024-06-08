import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addProductToFavorite: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeProductFromFavorite: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addProductToFavorite,
  removeProductFromFavorite,
  resetFavorite,
} = favSlice.actions;

export default favSlice.reducer;
