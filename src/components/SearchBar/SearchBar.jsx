import React, { useEffect} from 'react';
import TextField from '@mui/material/TextField';
import styles from './SearchBar.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {setError} from '../../redux/actions/jokeAppActions';
import useDataFetch from "../../API/fetchAPI-hook";

const SearchBar = (props) =>{
    const searchValue = useSelector(state => state.jokeReducer.searchValue)
    const {fetchJokeByQuery, changeCategory, changeSearchValue} = useDataFetch();
    const dispatch = useDispatch()

    useEffect(() =>{
        if(searchValue.length >= 3){
            fetchJokeByQuery(searchValue, props.index)
        }
        
    }, [searchValue])


    const handleChange = (event) =>{
        let regexOnlyLetters = /([A-Z]|[a-z])/g;
        let val = event.target.value

        if(regexOnlyLetters.test(val) || (val == "")){
            changeSearchValue(val);
        }else{
            dispatch(setError(true, "Please, provide letters only"))
            console.log("regex error")
        }
    }

    return(
        <div className={styles.search_bar}>
          <TextField onChange={handleChange} id="filled-basic" label="Search" variant="filled" value={searchValue} data-testid="searchForm"/>
        </div>
    )
}
export default SearchBar;