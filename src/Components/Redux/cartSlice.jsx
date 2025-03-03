import { createSlice } from "@reduxjs/toolkit"; //function store in reduxjstoolkit
export const cartSlice = createSlice({
  name: "userCart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    add_cart: (state, action) => {
      state.cartItems.push(action.payload); //Add new Item to cart
      console.log("Item Added to cart");
    },
  },
});
export const { add_cart } = cartSlice.actions; //function name.actions give function  export
export default cartSlice.reducer; //function name .reducer gives initial state
