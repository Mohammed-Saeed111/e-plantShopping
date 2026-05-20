import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart or increase quantity if already exists
    addItem: (state, action) => {
      const { id, name, price, image } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          id,
          name,
          price,
          image,
          quantity: 1
        });
      }
    },

    // Remove item from cart
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },

    // Increase quantity of item
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease quantity of item
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    // Clear entire cart
    clearCart: (state) => {
      state.cartItems = [];
    }
  }
});

// Selectors
export const selectCartItems = (state) => state.cart.cartItems;

export const selectCartTotalCount = (state) => {
  return state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);
};

export const selectCartTotalPrice = (state) => {
  return state.cart.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
};

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
