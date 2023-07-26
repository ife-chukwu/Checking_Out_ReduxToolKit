import { createSlice } from "@reduxjs/toolkit";
import { bags } from "../Component/bags";
import { toast } from "react-toastify";

const totalCart =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

const cartNumber =
  localStorage.getItem("cart-amount") !== null
    ? JSON.parse(localStorage.getItem("cart-amount"))
    : 0;

// const getFunc = (totalCart, cartNumber) => {
//   localStorage.getItem("cart", JSON.stringify(totalCart));
// };
const initialState = {
  cartItems: bags,
  amount: 0,
  cartNumber: cartNumber,
  total: 0,
  bag: totalCart,
  reminderMessage: "",
};

const nameSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.bag = [];
      state.cartNumber = state.cartNumber = 0;
      localStorage.setItem("cart", JSON.stringify(state.bag));
      localStorage.setItem("cart-amount", JSON.stringify(state.cartNumber));
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      console.log(itemId);
      if (itemId) {
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        toast.success(`Removed Item  ${itemId}`, {
          autoClose: 500,
        });
      }
    },

    removeItemFromBag: (state, action) => {
      const itemId = action.payload;
      if (itemId) {
        state.bag = state.bag.filter((item) => item.id !== itemId);
        state.cartNumber = state.cartNumber - 1;

        toast.success(`Removed Item  ${itemId}`, {
          autoClose: 500,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.bag));
      localStorage.setItem("cart-amount", JSON.stringify(state.cartNumber));
    },

    addToCart: (state, action, cartItem) => {
      const itemId = action.payload;
      const selectedItem = state.cartItems.find((item) => item.id === itemId);
      if (selectedItem) {
        const itemInCart = state.bag.find((item) => item.id === itemId);
        if (!itemInCart) {
          state.bag.push(selectedItem);
          state.cartNumber = state.cartNumber + 1;
          toast.success("Item added successfully", {
            autoClose: 500,
          });
        }

        if (cartItem) {
          cartItem.price = cartItem.price + 1;
        }
        if (itemInCart) {
          toast.warning("Item has already been added", {
            autoClose: 500,
          });
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.bag));
      localStorage.setItem("cart-amount", JSON.stringify(state.cartNumber));
    },

    increasePrice: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.price = cartItem.price + 1;
    },

    decreasePrice: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (cartItem.price > 1) {
        cartItem.price = cartItem.price - 1;
      } else {
        return;
      }
    },

    totalNumber: (state) => {
      let totalPrice = 0;
      state.bag.forEach((item) => (totalPrice += item.price));
      state.amount = totalPrice;
      console.log(totalPrice);
    },
  },
});

export const {
  clearCart,
  removeItem,
  addToCart,
  removeItemFromBag,
  increasePrice,
  decreasePrice,
  totalNumber,
} = nameSlice.actions;

export default nameSlice.reducer;
