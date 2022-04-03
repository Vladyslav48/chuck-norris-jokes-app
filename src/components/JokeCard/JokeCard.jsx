import React from 'react';
import styles from './JokeCard.module.css';
import {useSelector } from 'react-redux';


const JokeCard = () => {
    const joke = useSelector(state => state.jokeReducer.currentJoke)
    const category = useSelector(state => state.jokeReducer.currentCategory)
    const searchValue = useSelector(state => state.jokeReducer.searchValue)
    const isError = useSelector(state => state.jokeReducer.isError)
    const errorMessage = useSelector(state => state.jokeReducer.errorMessage)

    return(
        <div className={styles.card}>
            <h2>{(searchValue.length > 0) ? "search": category}</h2>
            <p>{isError ? errorMessage : joke}</p>
        </div>
    )

};

export default JokeCard;