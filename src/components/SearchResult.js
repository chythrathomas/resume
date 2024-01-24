import { getSearchedName } from "../store/ui-slice";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from './SearchResult.module.css';
import { useEffect } from "react";

const SearchResult=(props)=>{
     const allLoadedProfiles= props.allLoadedProfiles;
     const searchedName = useSelector(getSearchedName);

const filterSearchedName= searchedName.toLowerCase().trim();


    const filteredObjects= allLoadedProfiles.filter((profile)=>{
    return(profile.name.toString().toLowerCase().includes(filterSearchedName))  
  })
   
return(
  
   <Card>
      <form className={classes.form} >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
                 
          defaultValue={filteredObjects[0].name}
        ></input>
        <label htmlFor="age">Age</label>
        <input
          type="text"
         id='age'
          defaultValue={filteredObjects[0].age}
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          defaultValue={filteredObjects[0].email}
        />
        <label htmlFor="qualification">Qualification</label>
        <input
          type="text"
          id="qualification"
          defaultValue={filteredObjects[0].qualification}
        />
        <label htmlFor="experience">Experience(if any)</label>
        <textarea
          type="text"
          id="experience"
          defaultValue={filteredObjects[0].experience}
        />
        <label htmlFor="description">Additional Details (if any)</label>
        <textarea
          type="text"
          id="description"
          defaultValue={filteredObjects[0].details}
        />
      </form>
    </Card>

)
}
export default SearchResult;


/*const filteredData=()=>{
    if(filterSearchedName){
        const filteredData= allLoadedProfiles.filter((profile,index)=>{
            return Object.keys(profile).some(key=>{
                return profile[key].toString().toLowerCase().includes(filterSearchedName)
            })
        })
    } }
    console.log(filteredData);*/