import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../axios/api";
// cards 조회 Thunk
export const __getCardsThunk = createAsyncThunk(
    'GET_CARDS',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get
            (
                // "/games"
                'http://43.201.20.151:3001/api/games'
                // `${process.env.REACT_APP_SERVER_URL}`
            );
            console.log("data =>", data.games)
            return thunkAPI.fulfillWithValue(data.games)
        }   catch (e) {
            return thunkAPI.rejectWithValue(e.code)
        }
    }   
)

<<<<<<< Updated upstream

const initialState = {};
=======
>>>>>>> Stashed changes

// card 추가 Thunk
export const __addCardsThunk = createAsyncThunk(
    'ADD_CARDS',
    async (payload, thunkAPI) => {
        try {
            const { data } = await axios.post
            ('http://43.201.20.151:3001/api/games', payload)
            console.log("data =>", data.games)
            return thunkAPI.fulfillWithValue(data.games)
        }   catch (e) {
            return thunkAPI.rejectWithValue(e.code)
        }
    }
)

const initialState = {
    cards: [],
    error: null,
    isLoading: false,
    isSuccess: false,
}

// const initialState = [
//     {
//         id: 0,
//         title: "",
//         optionA: "",
//         optionB: "",
//     }
// ];
// cards 조회 함수
export const cardsSlice = createSlice({
    name: "cards",
    initialState,
<<<<<<< Updated upstream
    reducer: {}
=======
    reducer: {},
    extraReducers: {
        [__getCardsThunk.fulfilled]: (state, action) => {
            state.isLoading = false
            state.cards = action.payload
        },
    }
>>>>>>> Stashed changes
});

export const {} = cardsSlice.actions
export default cardsSlice.reducer