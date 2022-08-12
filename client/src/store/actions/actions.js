import axios from 'axios'
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES'
export const GET_DETAILS = 'GET_DETAILS'
export const POST_RECIPE = 'POST_RECIPE'
export const GET_DIETS = 'GET_DIETS'
export const SEARCH_RECIPE = 'SEARCH_RECIPE'
export const SEARCH_RECIPE_ERROR= 'SEARCH_RECIPE_ERROR'
export const CLEAN_DISPLAY = 'CLEAN_DISPLAY'
export const FILTER_BY_DIET = 'FILTER_BY_DIET'
export const SORT_BY_HEALTH_SCORE = 'SORT_BY_HEALTH_SCORE'
export const SORT_BY_ALPHABET = 'SORT_BY_ALPHABET'
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN'
export const FILTER_BTNS = 'FILTER_BTNS'

export function getAllRecipies() {
    return async function(dispatch) {
        return await axios.get('/recipes')
        .then(info => dispatch({
            type: GET_ALL_RECIPES,
            payload: info.data
        }))
        .catch(error => {
            console.log(error)
        })
    }
}

export function recipeID(id) {
    console.log(id)
    return async function(dispatch) {
        return await axios.get(`/recipes/${id}`)
        .then(detail => dispatch({
            type: GET_DETAILS,
            payload: detail.data
        })
        )
        .catch(error => {
            console.log(error)
        })
    }  
}

export function createRecipe(recipe) {
    return async function(dispatch) {
        return await axios.post('/recipes', recipe)
        .then(res => dispatch({
            type: POST_RECIPE,
            payload: res
        }))
        .catch(error => {
            console.log(error)
        })
    }   
}

export function getDiets() {
    return async function(dispatch) {
        return await axios.get('/diets')
        .then(diet => dispatch({
            type: GET_DIETS,
            payload: diet.data
        }))
        .catch(error => {
            console.log(error)
        })
    }
}

export function searchRecipe(name) {
    return async function(dispatch) {
        return await axios.get(`/recipes?name=${name}`)
        .then((result) => dispatch({
            type: SEARCH_RECIPE,
            payload: result.data
        }))
        .catch(error => { 
            console.log(error);
            dispatch({
                type: SEARCH_RECIPE_ERROR,
                payload: 'Recipe not found'
            })
        })
    }   
}

export function cleanRecipe() {
    return {
        type: CLEAN_DISPLAY,
        payload: []
    }
}

// SORT
export function sortAlphabetically(value) {
    return {
        type: SORT_BY_ALPHABET,
        payload: value
    }
}

export function sortScore(value) {
    return {
        type: SORT_BY_HEALTH_SCORE,
        payload: value
    }
}

// FILTER
export function filterByDiet(value) {
    return {
        type: FILTER_BY_DIET,
        payload: value      
    }
}

export function filterByOrigin(value) {
    return {
        type: FILTER_BY_ORIGIN,
        payload: value      
    }
}

export function filterBtns(value) {
    return {
        type: FILTER_BTNS,
        payload: value      
    }
}