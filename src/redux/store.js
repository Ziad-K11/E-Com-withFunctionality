import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import dropdownReducer from './dropdownSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    dropdown: dropdownReducer,
  },
});
