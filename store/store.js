import rootReducer from "./combinereducer";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: rootReducer,
});

export default store;
