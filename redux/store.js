import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./features/rootReducer";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducers);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
