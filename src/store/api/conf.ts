import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Headers {
  headers: {
    ContentType: string;
    Authorization: string;
    AccessControlAllowOrigin: string;
  };
}

const headers: Headers = {
  headers: {
    ContentType: "application/json; charset=UTF-8",
    Authorization: "",
    AccessControlAllowOrigin: "*",
  },
};

const page: string = "0";

const initialState = {
  page,
  headers: headers.headers,
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
    handlePage: (state, action: PayloadAction<string>) => {
      state = { ...state, page: action.payload };
    },
  },
});

export const { login, handlePage } = apiConf.actions;

export default apiConf.reducer;
