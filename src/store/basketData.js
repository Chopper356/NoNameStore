import { createSlice } from "@reduxjs/toolkit"

export const userData = createSlice({
  name: "basket",
  initialState: {
    products: [],
    show: false,
  },
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    showBascet(state) {
      state.show = true;
    },
    hideBascet(state) {
      state.show = false;
    }
  },
  extraReducers: {},
})

export const { addProduct, showBascet, hideBascet } = userData.actions;

export default userData.reducer