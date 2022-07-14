import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipies, cleanRecipe } from "../store/actions/actions";
import Nav from "../components/Nav";
import Paginate from "../components/Paginate";
import RecipeCard from "../components/RecipeCard";
import { MainContainer, Recipes, Error, Loader, Btns, BtnContainer } from '../styles/Main'
import loader from '../assets/loader.gif'
import FilterandOrder from "../components/FilterandOrder";
import { sortAlphabetically, sortScore, filterByDiet, filterByOrigin, filterBtns } from "../store/actions/actions";

export default function Main() {

    const dispatch = useDispatch();
    const allRecipes = useSelector(state => state.recipes)
    // console.log(allRecipes)
    const error = useSelector(state => state.error)

    useEffect(() => {
        dispatch(getAllRecipies())
        return () => {
            dispatch(cleanRecipe()) 
         }
    },[dispatch])

    // PAGINATE
    const [currentPage, setCurrentPage] = useState(1)
    const [recipePerPage, /*setRecipePerPage*/] = useState(9)

    const indexOfLastRecipe = currentPage * recipePerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipePerPage;
    const actualRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
    // console.log(actualRecipes)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);   

       // SORT AND FILTER FUNCTIONS
       const [/*order*/, setOrder] = useState('')

       function handleAlphSort(e) {
           e.preventDefault();
           dispatch(sortAlphabetically(e.target.value));
           setOrder(e.target.value);
           setCurrentPage(1);
       }
   
       function handleScoreSort(e) {
           e.preventDefault();
           dispatch(sortScore(e.target.value));
           setOrder(e.target.value);
           setCurrentPage(1);  
       }
   
       function handleDietFilter(e) {
           e.preventDefault();
           dispatch(filterByDiet(e.target.value));
           setCurrentPage(1);  
       }
   
       function handleOriginFilter(e) {
           e.preventDefault();
           dispatch(filterByOrigin(e.target.value));
           setCurrentPage(1);  
       }
   
       function handleReset(e) {
           e.preventDefault();
           window.location.reload(false)
       }

       // FILTER BTNS
       function handleBtn(e) {
            e.preventDefault();
            dispatch(filterBtns(e.target.value))
            setOrder(e.target.value)
            setCurrentPage(1)
       }

    return (
        <MainContainer>
            <Nav />
            <FilterandOrder 
                handleAlphSort={handleAlphSort}
                handleScoreSort={handleScoreSort}
                handleDietFilter={handleDietFilter}
                handleOriginFilter={handleOriginFilter}
                handleReset={handleReset}
            />

            <BtnContainer>
                <Btns value='all' onClick={handleBtn}>All</Btns>
                <Btns vegetarian={actualRecipes.vegetarian} value='vegetarian' onClick={handleBtn}>Vegetarian</Btns>
                <Btns vegan={actualRecipes.vegan} value='vegan' onClick={handleBtn}>Vegan</Btns>
                <Btns glutenFree={actualRecipes.glutenFree} value='gluten free' onClick={handleBtn}>Gluten Free</Btns>            
            </BtnContainer>

            {error !== '' && (<Error>{`${error}. Try again`}</Error>)}       

            <Recipes>
                {actualRecipes.length ? 
                    actualRecipes.map(r => {
                        return <RecipeCard 
                            key={r.id}
                            id={r.id}
                            name={r.name}
                            diets={r.diets}
                            image={r.image}
                            score={r.health_score}
                            vegetarian={r.vegetarian}
                            vegan={r.vegan}
                            glutenFree={r.glutenFree}
                        />
                }) :  error === '' && <Loader alt="loader" src={loader} /> }
            </Recipes>

            <Paginate 
                recipePerPage={recipePerPage}
                totalRecipes={allRecipes.length}
                paginate={paginate}
            />  

        </MainContainer>        
    ) 
};