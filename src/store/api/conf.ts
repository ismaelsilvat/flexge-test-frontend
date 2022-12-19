import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Headers {
  headers: {
    ContentType: string;
    Authorization: string;
    AccessControlAllowOrigin: string;
  };
}

const initialState: Headers = {
  headers: {
    ContentType: "application/json; charset=UTF-8",
    Authorization: "",
    AccessControlAllowOrigin: "*",
  },
};

export const apiConf = createSlice({
  name: "apiConf",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.headers = {
        ...state.headers,
        Authorization: action.payload,
      };
    },
  },
});

export const { login } = apiConf.actions;

export default apiConf.reducer;
