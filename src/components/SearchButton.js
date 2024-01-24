import { Fragment, useState } from "react";

import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchAsyncResume } from "../store/resumelist-slice";
import {uiActions } from "../store/ui-slice";

import classes from "./SearchButton.module.css";

const SearchButton = () => {
  
  const dispatch=useDispatch();
const [searchName, setSearchName] = useState('')

  const onChangeHandler = (event) => {
       setSearchName(event.target.value);
  };

const submitHandler=(event)=>{
  if(event.key==='Enter'){
  event.preventDefault();
   dispatch(uiActions.searchProfile(searchName));
   dispatch(uiActions.searchStatus());
   dispatch(fetchAsyncResume());
setSearchName('');
  }
}

  return (
    <Fragment>
      <NavLink to='/search'>
           <input
        type="text"
        placeholder="Search profile here..."
        className={classes.search}
        onChange={onChangeHandler}
        value={searchName}
        onKeyDown={submitHandler}
      >
      </input>
      </NavLink>
      </Fragment>

  );
};

export default SearchButton;
