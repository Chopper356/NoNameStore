import { createSlice } from "@reduxjs/toolkit"

export const userData = createSlice({
  name: "basket",
  initialState: {
    products: [],
    totalPrice: 0,
    totalCount: 0,
    show: false,
  },
  reducers: {
    initBasket(state) {
      const basket = JSON.parse(localStorage.getItem("basket"))
      state.products = basket.products;
      state.totalCount = basket.totalCount;
      state.totalPrice = basket.totalPrice;
    },
    addProduct(state, action) {
      state.products.push(action.payload);

      let price = 0;
      for(let product of state.products) {
        price += product.price;
      }

      state.totalPrice = price;
      state.totalCount = state.products.length;

      localStorage.setItem("basket", JSON.stringify(state));
    },
    deleteProduct(state, action) {
      const idx = state.products.findIndex((el) => el._id === action.payload);

      state.products.splice(idx, 1);
      
      let price = 0;
      for(let product of state.products) {
        price += product.price;
      }

      state.totalPrice = price;
      state.totalCount = state.products.length;

      localStorage.setItem("basket", JSON.stringify(state));
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

export const { addProduct, showBascet, hideBascet, deleteProduct, initBasket } = userData.actions;

export default userData.reducer