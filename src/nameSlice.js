import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";


// const [liveData, setLiveData] = useState('')
// const [displayData, setDisplayData] = useState('')

const initialState = {
    liveData: '',
    displayData: [],
}

const nameSlice = createSlice({
    name: 'tableUpdater',
    initialState,
    reducers: {
        setLiveData: (state, action) => {
            state.liveData = action.payload
        },
        setDisplayData: (state, action) => {
            state.displayData = [...state.displayData, state.liveData]
        }
    }

})
export const { reducer, actions } = nameSlice;
export const { setLiveData, setDisplayData } = actions;
export default reducer;