import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apis_token } from '../../axios/api'
import axios from 'axios'

const updateCardSuccess = (updatedGame) => ({
  type: 'UPDATE_CARD_SUCCESS',
  payload: updatedGame,
})
export const __getCardThunk = createAsyncThunk('GET_CARD', async (payload, thunkAPI) => {
  try {
    console.log("payload", payload)
    const { data } = await axios.get(`http://43.201.20.151:3001/api/games/${payload}`)
    console.log('card.data--->', data.game[0])
    return thunkAPI.fulfillWithValue(data.game[0])
  } catch (error) {
    console.log('card.error--->', error)
    return thunkAPI.rejectWithValue(error)
  }
})

//.commentsB[0].content
export const __updatedCardThunk = createAsyncThunk('UPDATE_CARD', async (payload, thunkAPI) => {
  try {
    console.log('card.payload--->', payload)
    const { data } = await apis_token.put(`http://43.201.20.151:3001/api/games/${payload.gameId}`, {
      optionA: payload.optionA,
      optionB: payload.optionB,
    })
    thunkAPI.dispatch(updateCardSuccess(data.game))
    console.log('card.payload--->', data.game)
    return thunkAPI.fulfillWithValue(data)
  } catch (error) {
    console.log('card.update--->', error)
    return thunkAPI.rejectWithValue(error)
  }
})

const initialState = {
  card: {
    id: 0,
    gameId: 0,
    userId: 0,
    title: '',
    optionA: '',
    optionB: '',
  },
  error: null,
  isLoading: false,
}

export const editSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    clearCard: (state) => {
      state.card = {
        id: 0,
        gameId: 0,
        userId: 0,
        title: '',
        optionA: '',
        optionB: '',
      }
    },
  },
  extraReducers: {
    [__getCardThunk.fulfilled]: (state, action) => {
      state.isLoading = false
      state.card = action.payload
    },
    [__getCardThunk.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    [__getCardThunk.pending]: (state) => {
      state.isLoading = true
    },
    [__updatedCardThunk.fulfilled]: (state, action) => {
      state.isLoading = false
      console.log('card.action.payload-->', action.payload)
      state.card = action.payload
    },
    [__updatedCardThunk.pending]: (state) => {
      state.isLoading = true
    },
    [__updatedCardThunk.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})
export const { clearCard } = editSlice.actions
export default editSlice.reducer
