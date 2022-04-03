import axios from 'axios'
import {useDispatch, useSelector } from 'react-redux';
import { getNextJoke, getRandomJoke, setError ,getCategoryList, setCategory, setSearchValue} from '../redux/actions/jokeAppActions';

const useDataFetch= () =>{
    const dispatch = useDispatch()
    const isError = useSelector(state => state.jokeReducer.isError)
    const searchValue = useSelector(state => state.jokeReducer.searchValue)

    
    const fetchRandomJoke = async () =>{
        try{
            if(isError){
                dispatch(setError(false,""))
            }
            const response = await axios.get('https://api.chucknorris.io/jokes/random')
            dispatch(getRandomJoke(response.data.value))

        }catch(error){
            dispatch(setError(true,`Sorry, no random jokes were found`))
        }
        
    }
    
    const fetchJokeByCategory = async(category) =>{
        try{
            if(isError){
                dispatch(setError(false,""))
            }
            const response = await axios(`https://api.chucknorris.io/jokes/random?category=${category}`)
            dispatch(getNextJoke(response.data.value))

        }catch(error){
            dispatch(setError(true,`Sorry, no jokes related to this category were found`))
        }

    }
    
    const fetchCategories = async () =>{
        try{
            const response = await axios.get('https://api.chucknorris.io/jokes/categories')
            dispatch(getCategoryList(response.data))

        }catch(error){
            dispatch(setError(true,"The categories were not found"))
        }

    }
    
    const fetchJokeByQuery = async (query, index) =>{
        
        try{
            if(isError){
                dispatch(setError(false,""))
            }
            if(query.length >= 3){
                const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`)
                dispatch(getNextJoke(response.data.result[index].value))
            }
            else{
                dispatch(setError(true,"Please, provide ay least 3 characters"))
            }
            
        }catch (error){
            dispatch(setError(true,`Sorry, no jokes related to "${query}" were found`))
            return false;
        }
        
    }

    const changeCategory = async (category) =>{
        try{
            if(isError){
                dispatch(setError(false,""))
            }
            dispatch(setCategory(category))

        }catch(error){
            dispatch(setError(true, "The category was not set"))
        }
    }

    const changeSearchValue = async (value) =>{
        try{
            if(isError){
                dispatch(setError(false,""))
            }
            
            if(searchValue.length > 0 && searchValue.length < 3 ){
                
                dispatch(setError(true, "Please, provide ay least 3 characters"))
            }
            dispatch(setSearchValue(value))

        }catch(error){
            dispatch(setError(true, "The search value was not set"))
        }
    }

    return{
        fetchRandomJoke,
        fetchJokeByCategory,
        fetchCategories,
        fetchJokeByQuery,
        changeCategory,
        changeSearchValue
    }
}

export default useDataFetch;











