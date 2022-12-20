import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let initialState = {
  contracts: [],
  searchTerm: "",
  loading: false,
  error: "",
};

export const contracts = createSlice({
  name: "contracts",
  initialState,
  reducers: {
    load: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
  },
});

export const { load } = contracts.actions;

export default contracts.reducer;
