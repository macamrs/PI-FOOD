import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { recipeID, cleanRecipe } from "../store/actions/actions";
import Nav from "../components/Nav";
import { Container, Info, Image, OptionsContainer, Score, InstructionContainer, IndividualContainer, BackBtn } from '../styles/Details'
import loader from '../assets/loader.gif'
import score from '../assets/speedometer.png'

export default function Details() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const recipeDetails = useSelector(state => state.details)
    // console.log(id)
    // console.log(recipeDetails)

    useEffect(() => {
        dispatch(recipeID(id))
        // cuando se desmonta el componente, limpio el estado inicial
        return () => {
           dispatch(cleanRecipe()) 
        };
    }, [dispatch, id])

    return (
        <div>
            <Nav />
            <BackBtn to='/home'>Go back</BackBtn>
            
        {recipeDetails.id ? 
            <Container key={recipeDetails.id}>
                <Image key={recipeDetails.id} src={recipeDetails.image} alt={recipeDetails.name} />  

                <Info>
                    <h1>{recipeDetails.name}</h1>

                    <Score>
                        <img alt="#" src={score} />
                        <p>Health Score:</p> 
                        <p>{recipeDetails.health_score}</p> 
                    </Score>

                    {recipeDetails.db_recipe === true ? 
                    <p>{recipeDetails.summary}</p> :
                    <p dangerouslySetInnerHTML={{__html: recipeDetails.summary}}></p>}                    
                    

                    <OptionsContainer>
                        <h2>Diet type:</h2>
                        {
                            recipeDetails.diets.map(d => {
                                return <p key={d}>{d}</p>
                            })
                        } 
                    </OptionsContainer>

                    <OptionsContainer>
                        <h2>Dish type:</h2>         
                        {recipeDetails.type ? recipeDetails.type.map(t => {
                            return <div>
                                 <p key={t}>{t}</p>
                            </div>
                        }) : <h3>This recipe doesn't have dish type properties</h3>}                           
                    </OptionsContainer>
 
                    <InstructionContainer>
                        <h2>Instructions</h2>
                        {
                        recipeDetails.db_recipe === true ?
                        recipeDetails.steps?.map((s, e) => {
                            return <IndividualContainer key={e}>
                            <span key={e}>{e}</span>
                            <p key={s.steps[e]}>{s.steps}</p>
                            </IndividualContainer>                            
                        }) :
                        recipeDetails.steps ? recipeDetails.steps.map(i => {
                                const final = recipeDetails.steps[0].map(e => {
                                    return <IndividualContainer key={e.number}>
                                        <span key={e.id}>{e.number} </span>
                                        <p key={e.number}>{e.step}</p>
                                    </IndividualContainer>
                                })  
                                return final;                     
                        }) : <h3>This recipe does not have any particular instructions</h3>}                         
                    </InstructionContainer> 
           
                </Info>

            </Container>          
         : <img alt="#" src={loader} />}
          
        </div>
    )
}