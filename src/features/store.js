import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import logger from "redux-logger";
import userSlice from "./users/userSlice";
import productsSlice from "./products/productsSlice";
import cartSlice from "./cart/cartSlice";

const rootReducer = combineReducers({
  user: userSlice,
  products: productsSlice,
  cart: cartSlice,
});

const persistConfig = {
  key: "sampleshop",
  storage: storageSession,
  blacklist: ["products"],
};

const persist_reducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persist_reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
