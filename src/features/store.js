import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import userSlice from "./users/userSlice";
import productsSlice from "./products/productsSlice";

const rootReducer = combineReducers({
  user: userSlice,
  products: productsSlice,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["products"],
};

const persist_reducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persist_reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;
