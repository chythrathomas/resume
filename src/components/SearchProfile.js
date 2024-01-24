import { useSelector } from "react-redux";
import { getResumeList, searchingStatus } from "../store/resumelist-slice";

import SearchResult from "./SearchResult";

const SearchProfile = (props) => {

  const allProfiles = useSelector(getResumeList);
  const searchStatus = useSelector(searchingStatus);

  let allLoadedProfiles = [];

  if (searchStatus === "success") {
    for (const key in allProfiles[0]) {
      allLoadedProfiles.push({
        id: key,
        name: allProfiles[0][key].name,
        age: allProfiles[0][key].age,
        email:allProfiles[0][key].email,
        qualification:allProfiles[0][key].degree,
        experience:allProfiles[0][key].experience,
        details:allProfiles[0][key].details
      });
    }

  }


  return (
    <SearchResult allLoadedProfiles={allLoadedProfiles}/>
  );
};
export default SearchProfile;
