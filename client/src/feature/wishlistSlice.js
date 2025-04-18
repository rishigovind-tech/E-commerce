import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;
      console.log(item);
      const exists = state.items.find(i => i.productID === item.productID);
      if (!exists) {
        state.items.push(item);
      }
    },
    removeFromWishlist: (state, action) => {
      console.log(action);
      state.items = state.items.filter(item => item.productID !== action.payload);
      
    },

  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
