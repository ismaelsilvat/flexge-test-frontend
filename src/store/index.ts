import { configureStore } from "@reduxjs/toolkit";
import apiConf from "./api/conf";
import products from "./contract/add/products";

const store = configureStore({
  reducer: {
    api: apiConf,
    products: products,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
