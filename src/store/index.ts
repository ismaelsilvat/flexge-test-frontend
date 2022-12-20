import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import apiConf from "./api/conf";
import products from "./contract/add/products";
import rootReducer from "./reducers/rootReducer";
import { rootSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    api: apiConf,
    products: products,
    rootReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
