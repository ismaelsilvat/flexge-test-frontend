import { configureStore } from "@reduxjs/toolkit";
import apiConf from "./api/conf";

const store = configureStore({
  reducer: {
    api: apiConf,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
