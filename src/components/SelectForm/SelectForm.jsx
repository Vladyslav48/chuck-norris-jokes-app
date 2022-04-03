import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from './SelectForm.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDataFetch from "../../API/fetchAPI-hook";


const SelectForm = () => {
  const category = useSelector(state => state.jokeReducer.currentCategory)
  const categoryList = useSelector((state) => state.jokeReducer.categoryList)
  const {fetchRandomJoke, fetchJokeByCategory, fetchCategories, fetchJokeByQuery, changeCategory, changeSearchValue} = useDataFetch();
  

  useEffect(()=>{
    fetchCategories()
  }, [])
  

  const handleChange = (event) => {
    let value = event.target.value
    changeCategory(value)
    changeSearchValue("")

    if(value !== "random"){
      
      fetchJokeByCategory(value)
    }
    else{
      fetchRandomJoke()
    }
    
  };

  let finalItemsList = categoryList.length > 0
    	&& categoryList.map((category, i) => {
      return (
        <MenuItem key={i} value={category}>{category}</MenuItem>
      )
    });

  return (
    <div className={styles.select_form}>
      <div>
        <FormControl sx={{ minWidth: 80 }} variant="filled">
          <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={category}
            onChange={handleChange}
            autoWidth
            variant="filled"
            label="Age"
          >
            <MenuItem value="random">
              <em>random</em>
            </MenuItem>
            {finalItemsList}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default SelectForm