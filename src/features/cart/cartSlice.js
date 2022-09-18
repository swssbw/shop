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

      const isDuplicate = state.cartItemList.findIndex((element) => element.product.id === action.payload.product.id);
      if (isDuplicate === -1) state.cartItemList = [...state.cartItemList, cartItem];
      else state.cartItemList[isDuplicate].count += action.payload.count;
    },
    removeFromCart: (state, action) => {
      // 카트에서 제거하는 로직
      state.cartItemList = state.cartItemList.filter((item) => item.product.id !== action.payload);
    },

    removeAll: (state, action) => {
      // 카트에서 전체삭제
      state.cartItemList = [];
    },
  },
});

export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
