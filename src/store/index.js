import { configureStore } from "@reduxjs/toolkit";
import userData from "./userData";
import productsData from "./productsData";
import basketData from "./basketData";

export default configureStore({
  reducer: {
    user: userData,
    products: productsData,
    bascet: basketData
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})