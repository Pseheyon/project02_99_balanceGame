import { configureStore } from "@reduxjs/toolkit";
import signup from "../modules/signup";
import login from "../modules/login";
import cardsSlice from "../modules/cardsSlice";
import card from "../modules/editSlice";
import comments from "../modules/commentASlice";
import comment from "../modules/commentSlice";
import likes from "../modules/likeSlice"

const store = configureStore({
  reducer: { 
    signup: signup, 
    login: login,
    cardsSlice,
    card,
    comments,
    comment,
    likes,
  },
});

export default store;
