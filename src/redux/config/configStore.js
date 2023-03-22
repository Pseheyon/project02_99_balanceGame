import { configureStore } from "@reduxjs/toolkit";
import cards from '../modules/cardsSlice'

const store = configureStore({
<<<<<<< Updated upstream
    reducer: {
        cards,
    },
=======
  reducer: { 
    signup: signup, 
    login: login,
    cardsSlice,
    card,
    comments,
    comment,
  },
>>>>>>> Stashed changes
});

export default store;