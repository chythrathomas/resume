import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import InputData from "./components/InputData";
import { isSearched } from "./store/ui-slice";
import SearchProfile from "./components/SearchProfile";
import { searchingStatus } from "./store/resumelist-slice";


function App() {
 const showProfile =useSelector(isSearched);
 const searchStatus = useSelector(searchingStatus);
 /*const entryStatus =useSelector(dataEntrySearched);*/

   async function addResumeHandler(resumeData) {
    const response = await fetch("https://resume-cc0d2-default-rtdb.firebaseio.com/resume.json",{
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(resumeData),
      });   
      const data =await response.json();

           }
    
  return (
    <Fragment>
       <Header />
      {showProfile &&searchStatus==='success' ?<SearchProfile/> :<InputData onAddResume={addResumeHandler} />  }
    </Fragment>
  );
}

export default App;
