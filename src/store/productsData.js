import { createSlice } from "@reduxjs/toolkit"
// import instance from "../lib/AxiosInstance";
// import { ApiUrls } from "../constants";


export const productsData = createSlice({
  name: "user",
  initialState: {
    all: [],
    current: {}
  },
  reducers: {
    setAllProducts: (state, action) => {
      state.all = action.payload;
    },
    setCurrentProduct: (state, action) => {
      state.current = action.payload;
    },
    removeCurrentProduct: (state) => {
      state.current = {};
    },
  },
  extraReducers: {},
})

export const { setAllProducts, setCurrentProduct, removeCurrentProduct } = productsData.actions;

export default productsData.reducer