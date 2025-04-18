

import { createSlice } from '@reduxjs/toolkit';

const cartlistSlice = createSlice({
  name: 'cartlist',
  initialState: {
    items: [],
  },
  reducers: {
    addToCartlist: (state, action) => {
      const item = action.payload;
      console.log(item);
      const exists = state.items.find(i => i.productID === item.productID);
      if (!exists) {
        state.items.push(item);
      }
    },
    removeFromCartlist: (state, action) => {
      state.items = state.items.filter(item => item.productID !== action.payload);
    },
  },
});

export const { addToCartlist, removeFromCartlist } = cartlistSlice.actions;
export default cartlistSlice.reducer;
