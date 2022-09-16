import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItemList: [] },
  reducers: {
    addToCart: (state, action) => {
      const cartItem = {
        product: action.payload.product,
        count: action.payload.count,
      };
      state.cartItemList = [...state.cartItemList, cartItem];
    },
    removeFromCart: (state, action) => {
      // 카트에서 제거하는 로직
      // state.cart =
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
