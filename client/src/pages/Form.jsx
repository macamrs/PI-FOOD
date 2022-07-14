import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import Nav from "../components/Nav";
import { createRecipe, getDiets } from "../store/actions/actions";
import { useDispatch, useSelector } from 'react-redux'
import { Success, Fail, ErrorMsg, SendBtn, Title, FormContainer, Main, Label, DietContainer, Diets, DietsDiv, InputContainer, AddBtn, RemoveBtn } from '../styles/Form'

function validateDiet(input) {
    let problem = {}

        if(input.diets.length <= 0) {
            problem.diets = 'Select at least one diet type'
        } else {
            problem.diets = ''
        }

    return problem;
}

function validateStep(input) {
    let problem = {}

        if(input.steps.length <= 0) {
            problem.steps = 'Add at least one step'
        } else {
            problem.steps = ''
        }        

    return problem;
}

export default function Form() {
    const dispatch = useDispatch();
    const allDiets = useSelector(state => state.diets)
    // console.log(allDiets)

    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch])

    const [validForm, setValidForm] = useState(null)
    const [name, setName] = useState({value:'', valid: null})
    const [summary, setSummary] = useState({value:'', valid: null})
    const [score, setScore] = useState({value:'', valid: null})
    const [image, setImage] = useState({value:'', valid: null})
    const [diets, setDiets] = useState({diets: []})
    const [steps, setSteps] = useState({steps: []})
    const [stepsInput, setStepsInput] = useState({steps: '', valid: null})
    const [errorDiet, setErrorDiet] = useState({diets: ''})
    const [errorStep, setErrorStep] = useState({steps: ''})
    
    const expressions = {
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        summary: /^[\w\d\s]{5,900}$/,
        score: /^[0-9][0-9]?$|^100$/,
        image: /^(ftp|http|https):\/\/[^ "]+$/ // Imagen tiene que ser URL
    }

    function handleDietCheckbox(e) {
        if(e.target.checked) {
            setDiets({
                ...diets,
                diets: [...diets.diets, e.target.value]
            })
            setErrorDiet(validateDiet({
                ...diets,
                diets: [...diets.diets, e.target.value]
            }))

        } else if(!e.target.checked) {
            setDiets({
                ...diets,
                diets: [...diets.diets.filter(d => d !== e.target.value)]                
            })
            setErrorDiet(validateDiet({
                ...diets,
                diets: [...diets.diets.filter(d => d !== e.target.value)]
            }))
        }
    }

    function handleStepChange(e) {
        e.preventDefault()
        setStepsInput({
            ...stepsInput,
            steps : e.target.value,
            valid: 'true'
        })
    }

    function addSteps(e) {
        e.preventDefault()
        setSteps({
            ...steps,
            steps: [...steps.steps, stepsInput]
        })  
        setErrorStep(validateStep({
            ...steps,
            steps: [...steps.steps, stepsInput]  
        }))    
        setStepsInput(
            { steps: '', valid: null }
        )
    }

    function removeStep(i) {
        let data = [...steps.steps]
        // console.log(data.length)

        data.splice(i, 1)
        setSteps({
            steps: data
        })    
        setErrorStep(validateStep({
            ...steps,
            steps: data  
        }))              
    }

    function onSubmit(e) {
        e.preventDefault();

        let input = {
            name: name.value,
            summary: summary.value,
            health_score: score.value,
            steps: steps.steps,
            image: image.value,
            diets: diets.diets
        }

        if(
            name.valid === 'true' &&
            summary.valid === 'true' &&
            score.valid === 'true' &&
            image.valid === 'true' &&
            steps.steps.length &&
            diets.diets.length && 
            !errorDiet.diets && !errorStep.steps
        ) {
            setValidForm(true);
            setErrorDiet({diets: ''})
            setErrorStep({steps: ''})
            dispatch(createRecipe(input))
            setName({value:'', valid: null})
            setSummary({value:'', valid: null})
            setScore({value:'', valid: null})
            setSteps({steps: []})
            setImage({value:'', valid: null})
            setDiets({diets: []})

        } else {
            setValidForm(false)
        }
    }

    return (
        <div>
            <Main>
                <Nav />
                <FormContainer onSubmit={onSubmit}>
                <Title>Create your own recipe!</Title>

                    {/* NAME */}
                    <Input 
                        state={name}
                        setState={setName}
                        type='text'
                        label='Recipe Name'
                        placeholder='Name'
                        name='name'
                        error='Name required and cannot contain numbers or special characters'
                        regularExpression={expressions.name}
                    />

                    {/* SUMMARY */}
                    <Input 
                        state={summary}
                        setState={setSummary}
                        type='text'
                        label='Summary'
                        placeholder='Summary'
                        name='summary'
                        error='A minimum of five(5) characters is required'
                        regularExpression={expressions.summary}
                    />

                    {/* HEALTH SCORE */}
                    <Input 
                        state={score}
                        setState={setScore}
                        type='number'
                        label='Health Score'
                        placeholder='Health Score'
                        name='score'
                        error='Score needs to be a number between 0 and 100'
                        regularExpression={expressions.score}
                    />

                    {/* IMAGE */}
                    <Input 
                        state={image}
                        setState={setImage}
                        type='text'
                        label='Image'
                        placeholder='Image URL'
                        name='image'
                        error='This image URL is not going to work'
                        regularExpression={expressions.image}
                    />

                    {/* STEPS */}
                    <InputContainer>
                    <Label>Recipe Instructions:</Label>
                        <input 
                            type='text'
                            name='steps'
                            placeholder='steps'
                            value={stepsInput.steps}
                            onChange={handleStepChange}
                        />   

                    <AddBtn onClick={addSteps}>Add</AddBtn>

                    {steps.steps.map((s, i) => {
                        return (
                            <div key={i}>                   
                                <span>{s.steps}</span>
                                {s.steps && s.valid === 'true' && (<RemoveBtn onClick={removeStep}>❌</RemoveBtn>)}       
                            </div>
                        )
                    })} 

                    {errorStep.steps && (<ErrorMsg>{errorStep.steps}</ErrorMsg>)}  
                    </InputContainer>

                    {/* DIETS */}
                    <DietContainer>
                        <Label>Select Diet:</Label>
                        <Diets>
                            {allDiets?.map((el) => {
                                return <DietsDiv key={el.id}>
                                    <input 
                                        key={el.id}
                                        value={el.name}
                                        type='checkbox'
                                        name="diets"
                                        onClick={handleDietCheckbox}
                                    />
                                    <span>{el.name}</span>
                                </DietsDiv>
                            })}                               
                        </Diets>

                        {errorDiet.diets && (<ErrorMsg>{errorDiet.diets}</ErrorMsg>)}                         
                    </DietContainer>
        
                    {validForm === false && (<Fail>Please complete all fields correctly</Fail>)}
                    
                    <SendBtn type="submit">Create Recipe</SendBtn>

                    {validForm === true && (<Success>Recipe created!</Success>)}
                </FormContainer>
            </Main>
        </div>

    )
}

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkKxuqzOHdM3w2SPyovSu3pILSlrOyo0ddIg&usqp=CAU