import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],         // Array to hold cart items
  totalQuantity: 0, // Total quantity of all items in the cart
  totalAmount: 0,   // Total price of all items in the cart
  showCart: false,  // Boolean to toggle cart visibility
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
      }

      // Update totalQuantity and totalAmount
      state.totalQuantity += 1;
      state.totalAmount += newItem.price;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity--;
        state.totalAmount -= existingItem.price;

        if (existingItem.quantity === 0) {
          state.items = state.items.filter(item => item.id !== id);
        } else {
          existingItem.totalPrice -= existingItem.price;
        }

        // Update totalQuantity
        state.totalQuantity--;

        if (state.totalQuantity < 0) {
          state.totalQuantity = 0; // Ensure it doesn't go negative
        }
      }
    },
  },
});

export const { addItem, removeItem, toggleCart } = cartSlice.actions;
export const selectCartItemCount = (state) => state.cart.totalQuantity;
export default cartSlice.reducer;
