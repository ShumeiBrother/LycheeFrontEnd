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
      id: "p4",
      category: "cloth",
      name: "Dép Dọ",
      price: 250,
      rating: 5,
      description: "Sandal của các cụ ngày xưa",
      image: "depdo.jpeg",
      quantity: 2,
    },
  ],
  totalQuantity: 4,
  totalPrice: 1000,
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
    addToCart(state, action) {
      const item = action.payload.item;
      const quantity = action.payload.quantity;
      const index = state.items.findIndex((x) => x.id === item.id);
      if (index > -1) state.items[index].quantity += quantity;
      else state.items.push({ ...item, quantity: action.payload.quantity });
      state.totalQuantity += quantity;
      state.totalPrice += quantity * item.price;
    },
    decreaseFromCart(state, action) {
      const item = action.payload.item;
      const quantity = action.payload.quantity;
      const index = state.items.findIndex((x) => x.id === item.id);
      if (index == -1) return;
      if (state.items[index].quantity <= 0) return;
      state.items[index].quantity -= quantity;
      state.totalQuantity -= quantity;
      state.totalPrice -= quantity * item.price;
    },
    removeFromCart(state, action) {
      const index = state.items.findIndex(
        (x) => x.id === action.payload.item.id
      );
      const item = state.items[index];
      if (index == -1) return;
      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.quantity * item.price;
      state.items = state.items.filter((x) => x.id !== item.id);
    },
  },
});

export const cartAction = CartSlice.actions;
export default CartSlice;
