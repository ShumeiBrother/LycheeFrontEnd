import { createSlice, current } from "@reduxjs/toolkit";

const InitialState = {
  open: false,
  items: [
    {
      id: "p3",
      category: "green",
      name: "Tỏi",
      price: 250,
      rating: 2.5,
      description: "Đây là hung khí của ca sĩ Châu Việt Cường",
      image: "garlic.jpeg",
      quantity: 2,
    },
    {
      id: "p3",
      category: "green",
      name: "Tỏi",
      price: 250,
      rating: 2.5,
      description: "Đây là hung khí của ca sĩ Châu Việt Cường",
      image: "garlic.jpeg",
      quantity: 2,
    },
  ],
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
    // addToCart(state, action) {
    //   const item = action.payload.item;
    //   const quantity = action.payload.quantity;
    //   const index = state.items.findIndex((x) => x.id === item.id);
    //   if (index > -1) state.items[index].quantity += quantity;
    //   else state.items.push(item);
    // },
    // removeFromCart(state, action) {},
  },
});

export const cartAction = CartSlice.actions;
export default CartSlice;
