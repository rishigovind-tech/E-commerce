import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from "../feature/wishlistSlice";
import cartlistReducer from "../feature/cartlistSlice"

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cartlist:cartlistReducer,
  },
});