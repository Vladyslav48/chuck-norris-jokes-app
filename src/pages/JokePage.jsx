import React from 'react';
import Header from '../components/Header/Header'
import SelectForm from '../components/SelectForm/SelectForm'
import SearchBar from '../components/SearchBar/SearchBar'
import JokeCard from '../components/JokeCard/JokeCard';
import Button from '@mui/material/Button';

import { useEffect, useState } from 'react';
import useDataFetch from "../API/fetchAPI-hook";
import {useSelector } from 'react-redux';
import styles from './JokePage.module.css';


const JokePage = () =>{
    const category = useSelector(state => state.jokeReducer.currentCategory)
    const searchValue = useSelector(state => state.jokeReducer.searchValue)
    const {fetchRandomJoke, fetchJokeByCategory, fetchJokeByQuery, changeCategory,changeSearchValue} = useDataFetch();

    const [index, setIndex] = useState(0)
    

    const randomJokeBtnOnclick = () =>{
      fetchRandomJoke()
    }
  
    const nextJokeBtnOnclick = () =>{
      // case1: (searchValue.length > 0) : search by query, category to random
      if(searchValue.length > 0){
 
        //set search value
        changeSearchValue(searchValue)
        
        //fetch data
        setIndex(index + 1)
        fetchJokeByQuery(searchValue, index)
        
        console.log(index)
        
    }
    // case2: (category !== "random") && (searchValue.length = 0) => serach by category
      else if(category !== "random" && searchValue.length === 0){
        fetchJokeByCategory(category)
        setIndex(0)
        
      }
      //case3: search by random
      else{
        fetchRandomJoke()
        setIndex(0)
        
      }
    }
  
  
    useEffect(()=>{
      fetchRandomJoke()
    },[])
  
  
    return (
      <div>
        <Header />

        <div className = {styles.search_joke_container}>
            <SelectForm />
            <SearchBar index={index} />
        </div>

        <JokeCard/>

        <div className ={styles.btns_container}>
            <Button style={{backgroundColor: "#5e0994d9"}} variant="contained"onClick={randomJokeBtnOnclick} >Get Random Joke</Button>
            <Button style={{backgroundColor: "#5e0994d9"}} variant="contained" onClick={nextJokeBtnOnclick}>Next</Button>
        </div>
    </div>
    );
}

export default JokePage;