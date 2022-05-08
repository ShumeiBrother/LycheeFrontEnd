import { createSlice, current } from "@reduxjs/toolkit";

const InitialState = {
  open: false,
};
const CartSlice = createSlice({
  name: "cart",
  initialState: InitialState,
  reducers: {
    // changeLoginState(state){
    //     state.isLoggedIn = !state.isLoggedIn;
    // }
    open(state) {
      state.open = true;
    },
    setOpen(state, action) {
      console.log("cometosetopen");
      state.open = action.payload;
    },
  },
});

export const cartAction = CartSlice.actions;
export default CartSlice;
