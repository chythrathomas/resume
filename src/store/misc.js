


const fetchResumeData =()=>{
    return((async)=>{
        const response = await fetch('https://resume-cc0d2-default-rtdb.firebaseio.com/resume.json')
if(!response.ok){
    console.log('couldnot fetch the resumeList');
}
const data = await response.json();
return data;
} 
    


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
    resumeList :[]
}

const resumeListSlice = createSlice({
    name: 'resumeList',
    initialState,
    extraReducers :{
    [fetchAsyncResume.pending]  :()=>{
        console.log('pending');
    },
    [fetchAsyncResume.fulfilled] :(state, {payload})=>{
        console.log('fetched successfully');
        return{...state, payload};
    },
    [fetchAsyncResume.rejected]: ()=>{
        console.log('Rejected');
    }}

})


export const resumeListActions = resumeListSlice.actions;
export const getResumeList =(state)=>state.resumeList.resumeList;
export default resumeListSlice;



const newSearchProfile = allProfiles.filter((allProfile)=>{
    return Object.values(allProfile).join('').toLowerCase().includes(searchedName.toLowerCase());
})
console.log(newSearchProfile);



let allLoadedProfiles= [];
 for (const key in allProfiles[0]) {
    allLoadedProfiles.push({
            id:key,
  name:allProfiles[0][key].name,
  age:allProfiles[0][key].age
    })
    console.log(allLoadedProfiles);
      }

//final

      let allLoadedProfiles = [];

      if (searchStatus === "success") {
        for (const key in allProfiles[0]) {
          allLoadedProfiles.push({
            id: key,
            name: allProfiles[0][key].name,
            age: allProfiles[0][key].age,
          });
        }
        console.log(allLoadedProfiles);
      }
      return (
        <Fragment>
          <h2>{searchedName}</h2>
        </Fragment>
      );
    };
    export default SearchProfile;