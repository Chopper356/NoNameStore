import { configureStore } from "@reduxjs/toolkit";
import userData from "./userData";
import productsData from "./productsData";
import basketData from "./basketData";

export default configureStore({
  reducer: {
    user: userData,
    products: productsData,
    basket: basketData
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})