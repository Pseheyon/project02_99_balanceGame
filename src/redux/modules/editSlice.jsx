import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const __getCardThunk = createAsyncThunk('GET_CARD', async (payload, thunkAPI) => {
  try {
    const data = await axios.get(`http://localhost:4000/games/${payload}`)
    console.log('data--->', data.data)
    return thunkAPI.fulfillWithValue(data.data)
  } catch (error) {
    console.log('error--->', error)
    return thunkAPI.rejectWithValue(error)
  }
})

export const __updatedCardThunk = createAsyncThunk('UPDATE_TODO', async (payload, thunkAPI) => {
  try {
    axios.patch(`http://localhost:4000/games/${payload.id}`, payload)
    console.log('patload--->', payload)
    return thunkAPI.fulfillWithValue(payload)
  } catch (error) {
    console.log('update--->', error)
    return thunkAPI.rejectWithValue(error)
  }
})

const initialState = {
  card: {
    id: 0,
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
      console.log('action.payload-->', action.payload)
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
