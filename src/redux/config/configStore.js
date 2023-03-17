import { configureStore } from "@reduxjs/toolkit";
import cards from '../modules/cardsSlice'

const store = configureStore({
    reducer: {
        cards,
    },
});

export default store;