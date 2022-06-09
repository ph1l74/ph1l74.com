import { createSlice } from "@reduxjs/toolkit";
import { initState } from '../constants'

const slice = createSlice({
    name: "slice",
    initialState: initState,
    reducers: {}
})

export default slice.reducer