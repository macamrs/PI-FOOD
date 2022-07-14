import React from 'react'
import errorImg from '../assets/error.jpg'
import { Link } from 'react-router-dom'
import { NotFoundContainer, CardLink } from '../styles/Main' 

function NotFound() {
  return (
    <NotFoundContainer>
        <CardLink to='/home'>Go to home page</CardLink>        
        <img alt='error' src={errorImg} />
    </NotFoundContainer>
    
  )
}

export default NotFound