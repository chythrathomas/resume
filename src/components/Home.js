import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import classes from './Home.module.css';
import {Route} from 'react-router-dom';
import { NavLink } from "react-router-dom";

const Home=()=>{

    const dispatch= useDispatch();

    const homeClickHandler=()=>{
dispatch(uiActions.searchStatus());
    }

    return(
        <NavLink to='/home'><button className={classes.button} type='button' onClick={homeClickHandler}>Home</button></NavLink>
    
    )
}

export default Home;