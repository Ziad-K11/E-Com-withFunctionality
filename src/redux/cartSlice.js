import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  showCart: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQuantity++;
      }
      state.totalAmount += newItem.price;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        state.totalAmount -= existingItem.price;
        existingItem.quantity--;
        if (existingItem.quantity === 0) {
          state.items = state.items.filter(item => item.id !== id);
        }
        state.totalQuantity--;
      }
    },
  },
});

export const { addItem, removeItem, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
// src/features/cart/cartSlice.js

// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     showCart: false,
//   },
//   reducers: {
//     toggleCart: (state) => {
//       state.showCart = !state.showCart;
//     },
//   },
// });

// export const { toggleCart } = cartSlice.actions;
// export default cartSlice.reducer;
