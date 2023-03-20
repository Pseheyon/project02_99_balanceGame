import { configureStore } from '@reduxjs/toolkit'
import cards from '../modules/cardsSlice'
import card from '../modules/editSlice'

const store = configureStore({
  reducer: {
    cards,
    card,
  },
})

export default store
