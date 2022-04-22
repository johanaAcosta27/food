import axios from 'axios';
import {GET_RECIPES,
 FILTER_BY_TYPEDIET,
 ORDER_SORT,
 ORDER_SCORT,
 GET_BY_NAME,
 GET_BY_ID,
 GET_TYPE_DIETS
} from "./types"; 

export function getRecipes(){
     return async function(dispatch){
         var json = await axios.get(`http://localhost:3001/recipes`);
         return dispatch({
             type : GET_RECIPES,
             payload: json.data
         })
     }
} 

export function filterDiet (payload){
    return {
        type : FILTER_BY_TYPEDIET,
        payload
    }
}

export function orderSort (payload){
    return {
        type : ORDER_SORT,
        payload
    }
}

export function orderScort (payload){
    return {
        type : ORDER_SCORT,
        payload
    }
}

export function getRecipesByName (name){
    
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/recipes?name=${name}`);
    return dispatch( {
        type : GET_BY_NAME,
        payload: json.data
    })
}
}

export function getRecipesById (id){
    
    return async function(dispatch){
        var json = await axios.get(`http://localhost:3001/recipes/${id}`);
    return dispatch( {
        type : GET_BY_ID,
        payload: json.data
    })
}
}

export function getTypeDiets (){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/types");
        return dispatch( {
            type : GET_TYPE_DIETS,
            payload: json.data
        })

    }
}

export function postRecipes (payload){
    return async function(dispatch){
        var json = await axios.post(`http://localhost:3001/recipe`,payload);
        return json
    }

}


