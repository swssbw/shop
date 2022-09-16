import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/getProductsList", async () => {
  try {
    const {
      data: { products },
    } = await axios.get(`https://dummyjson.com/products?limit=20&skip=0`);
    return products;
  } catch (e) {
    return e;
  }
});

export const getProductsByScroll = createAsyncThunk("products/getProductsByScroll", async (skip) => {
  try {
    const {
      data: { products },
    } = await axios.get(`https://dummyjson.com/products?limit=20&skip=${skip}`);
    return products;
  } catch (e) {
    return e;
  }
});

export const getProductsByCategory = createAsyncThunk("products/getProductsCategory", async (category) => {
  try {
    const {
      data: { products },
    } = await axios.get(`https://dummyjson.com/products/category/${category}`);
    return products;
  } catch (e) {
    return e;
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState: { productsList: [], isLoading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
        state.productsList = [];
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productsList = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
      })

      .addCase(getProductsByScroll.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProductsByScroll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productsList = [...state.productsList, ...action.payload];
      })
      .addCase(getProductsByScroll.rejected, (state, action) => {
        state.isLoading = false;
      })

      .addCase(getProductsByCategory.pending, (state, action) => {
        state.isLoading = true;
        state.productsList = [];
      })
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productsList = action.payload;
      })
      .addCase(getProductsByCategory.rejected, (state, action) => {
        state.productsList = [];
        state.isLoading = false;
      });
  },
});

export default productsSlice.reducer;
