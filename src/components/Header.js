import { useSelector } from 'react-redux';
import { dataEntrySearched } from '../store/entry-slice';
import { isSearched } from '../store/ui-slice';
import AddProfileButton from './AddProfileButton';
import classes from './Header.module.css';
import Home from './Home';
import SearchButton from './SearchButton';


const Header=()=>{

    const showProfile= useSelector(isSearched);
    /*const entryStatus = useSelector(dataEntrySearched);*/

    return (
        <header className={classes.header}>
            <h1> Biodata </h1>
            <nav>
                <ul>
                     <li>
                     
                       { showProfile ? <Home/> :<SearchButton/>} 
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;