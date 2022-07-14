import React, { useState } from "react";
import { PageContainer, ButtonPage, ButtonNum } from '../styles/Main'

export default function Paginate({recipePerPage, totalRecipes, paginate}) {

    const [actual, setActual] = useState(1)
    const pageNumbers = []

    for(let i=1; i <= Math.ceil(totalRecipes / recipePerPage); i++) {
        pageNumbers.push(i)
    }

    function handlePrev(e) {
        e.preventDefault();
        if(actual === 1) {
            paginate(1)
        } else {
            paginate(actual - 1)
            setActual(actual - 1)
        }
    }

    function handleNext(e) {
        e.preventDefault();
        if(actual === pageNumbers.length) {
            paginate(pageNumbers.length)
        } else {
            paginate(actual + 1)
            setActual(actual + 1)
        }
    }

    return (
        <PageContainer>
            <div>
                <ButtonPage onClick={e => handlePrev(e)}>Previous</ButtonPage>
            </div>

        {pageNumbers?.map(num => {
            return (<li key={num}>
                <ButtonNum value={num} onClick={() => paginate(num)}>{num}</ButtonNum>
            </li>)
        })}

            <div>
                <ButtonPage onClick={e => handleNext(e)}>Next</ButtonPage>
            </div>
        </PageContainer>
    )
}