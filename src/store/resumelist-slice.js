import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

 export const fetchAsyncResume = createAsyncThunk('resumeList/fetchAsyncResume',async()=>{
    const response = await fetch('https://resume-cc0d2-default-rtdb.firebaseio.com/resume.json')
if(!response.ok){
    console.log('couldnot fetch the resumeList');
}
const data = await response.json();
return data;
} )

const initialState ={
    status:'',
    resumeList :[]
}

const resumeListSlice = createSlice({
    name: 'resumeList',
    initialState,
    extraReducers(builder) {
        builder
    .addCase(fetchAsyncResume.pending, (state,action)=>{
        console.log('pending');
    })
    .addCase(fetchAsyncResume.fulfilled,(state, action)=>{
        console.log('fetched successfully');
        state.status = 'success';
       state.resumeList = state.resumeList.concat(action.payload)
      
    })
    .addCase(fetchAsyncResume.rejected, (state,action)=>{
        console.log('Rejected');
    })

}})


export const resumeListActions = resumeListSlice.actions;
export const getResumeList =(state)=>state.resumeList.resumeList;
export const searchingStatus=(state)=>state.resumeList.status;
export default resumeListSlice;





