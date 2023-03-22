import { configureStore } from "@reduxjs/toolkit";
import signup from "../modules/signup";
import login from "../modules/login";
const store = configureStore({

  reducer: { 
    signup: signup, 
    login: login,
    cardsSlice,
    card,
    comments,
    comment,
  },
});

export default store;
