import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const ModalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
      if (state.isOpen) {
        console.log("Opened");
      } else {
        console.log("not Opened");
      }
    },

    closeModal: (state) => {
        state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = ModalSlice.actions;
export default ModalSlice.reducer;
