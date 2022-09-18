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

      if (isDuplicate === -1) {
        // 장바구니에 존재하지 않는 상품 추가시 해당 상품 추가
        state.cartItemList = [...state.cartItemList, cartItem];
      } else {
        // 장바구니에 존재하는 상품 추가시 해당 상품의 수량 증가
        state.cartItemList[isDuplicate].count += action.payload.count;
      }
      // console.log("action.payload.product", action.payload.product);
      // console.log(state.cartItemList.findIndex((element) => element.product.id === action.payload.product.id));
    },
    removeFromCart: (state, action) => {
      // 카트에서 제거하는 로직
      // state.cart =
    },

    removeAll: (state, action) => {
      // 카트에서 전체삭제
      state.cartItemList = [];
    },
  },
});

export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
