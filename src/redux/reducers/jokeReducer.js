import { ActionTypes } from "../constants/actionTypes";
// import {fetchRandomJoke} from "./API/fetchAPI-funcs";

let initialState = {
    categoryList: [],
    currentJoke: '',
    currentCategory: 'random',
    searchValue: '',
    isError: false,
    errorMessage: ''
};

export const jokeReducer = (state = initialState, {type, payload}) =>{

    switch (type){
        case ActionTypes.GET_CATEGORY_LIST:
            return {
                ...state,
                categoryList: payload
            }

        case ActionTypes.SET_CATEGORY:
            return {
                ...state,
                currentCategory: payload,
                
                
            }

        case ActionTypes.SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: payload,
                
            }

        case ActionTypes.GET_RANDOM_JOKE:
            return {
                ...state,
                currentJoke: payload,
                currentCategory: 'random',
                searchValue: '',
                
                
            }

        case ActionTypes.GET_NEXT_JOKE:
            return {
                ...state,
                currentJoke: payload,
                
            }

        case ActionTypes.SET_ERROR:
            return {
                ...state,
                isError: payload.value,
                errorMessage: payload.message,
            }

        default: return state;

    }
}