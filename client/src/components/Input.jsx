import React from 'react'
import { Error, InputContainer, Label } from '../styles/Form'

export default function Input({state, setState, type, label, placeholder, name, error, regularExpression}) {

  function handleChange(e) {
    e.preventDefault();
    setState({
      ...state,
      value: e.target.value
    })
  }

  function validate() {
    if(regularExpression) {
      if(regularExpression.test(state.value)) {
        setState({
          ...state,
          valid: 'true'
        })
      } else {
        setState({
          ...state,
          valid: 'false'
        })        
      }
    }
  }

  return (
    <InputContainer>
        <Label valid={state.valid} >{label}</Label>
            <input 
                id={name}
                type={type}
                placeholder={placeholder}
                value={state.value}
                onChange={handleChange}
                onBlur={validate}
                onKeyUp={validate}
                valid={state.valid}
            />
        {error && (<Error valid={state.valid}>{error}</Error>)}
    </InputContainer>
  )
};