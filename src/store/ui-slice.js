import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    searchName:'',
    isSearched: false
}

const uiSlice = createSlice({
    name:'ui',
    initialState,
reducers: {
    searchProfile(state,action){
        state.searchName = action.payload
    },
    searchStatus(state){
        state.isSearched = !state.isSearched
    }
        
    } 

}
);

export const uiActions= uiSlice.actions;
export const getSearchedName=(state) => state.ui.searchName;
export const isSearched=(state)=>state.ui.isSearched;
export default uiSlice;