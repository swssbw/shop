import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import userSlice from "./users/userSlice";

const rootReducer = combineReducers({
  user: userSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persist_reducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persist_reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;
