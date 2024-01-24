import { entryActions } from "../store/entry-slice";
import { useDispatch } from "react-redux";

const AddProfileButton=()=>{
    const dispatch= useDispatch();
    
    const addProfileHandler=(event)=>{
    event.preventDefault();
    dispatch(entryActions.entrySearchStatus());
    }
    

    return(
        <button onClick={addProfileHandler}>Add Profile</button>
    )

}

export default AddProfileButton;