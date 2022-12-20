import createSagaMiddleware from "redux-saga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import apiConf from "./api/conf";
import products from "./contract/add/products";
import contracts from "./contract/list";
import { initSagas } from "./sagas";
import rootReducer from "./modules";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware(), sagaMiddleware];

const store = configureStore({
  reducer: {
    api: apiConf,
    products: products,
    contracts: contracts,
    rootReducer,
  },
  middleware,
});

initSagas(sagaMiddleware);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
