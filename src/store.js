import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./Features/nameState";
import ModalReducer from "./Features/ModalFeature";

const store = configureStore({
  reducer: {
    name: nameReducer,
    modal: ModalReducer,
  },
});

export default store;
