import {
    GET_ALL_RECIPES,
    GET_DETAILS,
    POST_RECIPE,
    GET_DIETS,
    SEARCH_RECIPE,
    SEARCH_RECIPE_ERROR,
    CLEAN_DISPLAY,
    FILTER_BY_DIET,
    SORT_BY_HEALTH_SCORE, 
    SORT_BY_ALPHABET,
    FILTER_BY_ORIGIN,
    FILTER_BTNS
} from '../actions/actions'

const initialState = {
    recipes: [],
    copy: [],
    details: [],
    diets: [],
    error: ''
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_ALL_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                copy: action.payload
            }

        case GET_DETAILS: {
            return {
                ...state,
                details: action.payload
            }
        }  
        
        case GET_DIETS: {
            return {
                ...state,
                diets: action.payload
            }
        }

        case POST_RECIPE: {
            return {
                ...state
            }
        }

        case SEARCH_RECIPE: {
            return {
                ...state,
                recipes: action.payload,
                error: ''
            }
        }

        case SEARCH_RECIPE_ERROR: {
            return {
                ...state,
                recipes: [],
                error: action.payload
            }
        }

        case FILTER_BY_DIET:{
            let arrFilter = state.copy;
            // console.log(arrFilter)

            let filterByDiet = action.payload === 'all' ? arrFilter 
            : action.payload === 'vegetarian' ? arrFilter.filter(d => d.vegetarian === true)
            : arrFilter.filter(d => d.diets?.includes(action.payload))

            // console.log(filterByDiet)
            return {
                ...state,
                recipes: filterByDiet,
                error: filterByDiet.length !== 0 ? '' : `We didn't find a ${action.payload} recipe`
            }
        }

        case FILTER_BY_ORIGIN: {
            let arrOrigin = state.copy;

            let filterByOrigin = 
            action.payload === 'api' ? arrOrigin.filter(d => !d.db_recipe) :
            action.payload === 'db' ? arrOrigin.filter(d => d.db_recipe === true) :
            arrOrigin

            return {
                ...state,
                recipes: filterByOrigin,
                error: filterByOrigin.length !== 0 ? '' : `There's no recipes in data base`
            }
        }

        case SORT_BY_HEALTH_SCORE: {
            let sortScore = action.payload === 'high' ? state.recipes.sort((a,b) => {
                if (a.health_score > b.health_score) return -1;
                if (a.health_score < b.health_score) return 1;
                else return 0; 
            }) : state.recipes.sort((a, b) => {
                if (a.health_score > b.health_score) return 1;
                if (a.health_score < b.health_score) return -1;
                else return 0;  
            });            

            return {
                ...state,
                recipes: sortScore
            }
        }

        case SORT_BY_ALPHABET:{
            let sortAlph = action.payload === 'asc' ? state.recipes.sort((a,b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                else return 0; 
            }) : state.recipes.sort((a, b) => {
                if (a.name > b.name) return -1;
                if (a.name < b.name) return 1;
                else return 0;  
            });

            return {
                ...state,
                recipes: sortAlph
            }
        }

        case FILTER_BTNS: {
            let arrFilter= state.copy;

            let filterBtn = action.payload === 'vegetarian' ? arrFilter.filter(d => d.vegetarian === true)
            : action.payload === 'vegan' ? arrFilter.filter(d => d.vegan === true)
            : action.payload === 'gluten free' ? arrFilter.filter(d => d.glutenFree === true) 
            : arrFilter

            return {
                ...state,
                recipes: action.payload === 'all' ? arrFilter : filterBtn
            }
        }

        case CLEAN_DISPLAY: {
            return {
                ...state,
                details: action.payload
            }
        }
        
        default:
            return state;
    }
}