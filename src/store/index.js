import { configureStore } from "@reduxjs/toolkit";
import userData from "./userData";
import productsData from "./productsData";

export default configureStore({
  reducer: {
    user: userData,
    products: productsData
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})