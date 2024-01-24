import { createSlice } from "@reduxjs/toolkit";

const initialState={
    dataEntrySearched: false
}
const entrySlice = createSlice({
    name:'entry',
    initialState,
    reducers:{
        entrySearchStatus(state){
            state.dataEntrySearched= !state.dataEntrySearched
        }}
})

export const entryActions =entrySlice.actions;
export const dataEntrySearched=(state)=>state.entry.dataEntrySearched;
export default entrySlice;