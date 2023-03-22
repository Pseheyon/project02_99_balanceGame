import { configureStore } from "@reduxjs/toolkit";
import signup from "../modules/signup";
import login from "../modules/login";
const store = configureStore({
  reducer: { signup: signup, login: login },
});

export default store;
