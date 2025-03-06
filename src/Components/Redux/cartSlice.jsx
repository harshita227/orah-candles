import { createSlice } from "@reduxjs/toolkit"; //function store in reduxjstoolkit
export const cartSlice = createSlice({
  name: "userCart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    add_cart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      console.log("Item Added to cart");
    },
    remove_cart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      console.log("Item Removed from cart");
    },
    update_cart: (state, action) => {
      const { id, quantity } = action.payload;
      const items = state.cartItems.find((item) => item.id === id);
      if (items) {
        items.quantity = quantity;
      }
    },
  },
});
export const { add_cart, remove_cart, update_cart } = cartSlice.actions; //function name.actions give function  export
export default cartSlice.reducer; //function name .reducer gives initial state
