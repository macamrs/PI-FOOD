import React from "react";
import { Card, CardLink, LogoType, CardImg, TypeContainer, Info, DietDiv } from '../styles/Main'
import vegetarianImg from '../assets/vegetarian.png'
import glutenFreeImg from '../assets/gluten-free.png'
import veganImg from '../assets/vegan.png'
import scoreMeter from '../assets/speedometer.png'

export default function RecipeCard({id, name, diets, image, score, vegetarian, glutenFree, vegan}) {
    return (
        <Card>
            <Info key={id}>
                <TypeContainer>
                    {vegetarian === true && <LogoType alt='vegetarian' src={vegetarianImg}/>}   
                    {glutenFree === true && <LogoType alt='gluten free' src={glutenFreeImg}/>} 
                    {vegan === true && <LogoType alt='vegan' src={veganImg}/>}                     
                </TypeContainer>
                <CardImg src={image} alt={name} />
                <h2>{name}</h2>

                <DietDiv>
                    {diets?.map((d, p)=> {
                        return <p key={p}>{d}</p>
                    })}                        
                </DietDiv>

                <span><img alt="#" src={scoreMeter}/>{score}</span>
            </Info>    
            <CardLink to={`/home/${id}`}>
                More info    
            </CardLink>            
        </Card>
    )
}