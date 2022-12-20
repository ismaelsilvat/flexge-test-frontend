import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type IProduct = {
  name: string;
  amount: Number;
  unitprice: Number;
  installments: Number;
  paid_installments: Number;
  beginning_term_date: Date;
  contract?: string
};

var data: IProduct[] = [];

const initialState = {
  data,
};

export const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.data = [...state.data, action.payload];
    },
    removeAll: (state) => {
      state.data = [];
    },
  },
});

export const { addProduct, removeAll } = products.actions;

export default products.reducer;
