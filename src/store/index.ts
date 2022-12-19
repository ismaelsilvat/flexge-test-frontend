import { configureStore } from "@reduxjs/toolkit";
import apiConf from "./api/conf";
// ...

const store = configureStore({
  reducer: {
    api: apiConf,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
