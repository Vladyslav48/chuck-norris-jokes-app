import { ActionTypes} from "../constants/actionTypes";


export const getCategoryList = (list) => {
    return{
        type: ActionTypes.GET_CATEGORY_LIST,
        payload: list
    }
  }

export const setCategory = (category) => {
return{
    type: ActionTypes.SET_CATEGORY,
    payload: category
}
}

export const setSearchValue = (value) => {
    return{
        type: ActionTypes.SET_SEARCH_VALUE,
        payload: value
    }
    }
export const getRandomJoke = (randomJoke) => {
    return{
        type: ActionTypes.GET_RANDOM_JOKE,
        payload: randomJoke
    }
  }

export const getNextJoke = (nextJoke) =>{
    return{
        type: ActionTypes.GET_NEXT_JOKE,
        payload: nextJoke
    }
}

export const setError = (value, message) =>{
    return{
        type: ActionTypes.SET_ERROR,
        payload: {
            value: value,
            message: message
        }
    }
}