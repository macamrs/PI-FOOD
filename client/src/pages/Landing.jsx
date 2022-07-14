import React from 'react'
import asset1 from '../assets/1-removebg-preview.png'
import asset2 from '../assets/2-removebg-preview.png'
import asset3 from '../assets/4-removebg-preview.png'
import asset4 from '../assets/6-removebg-preview.png'
import asset5 from '../assets/7-removebg-preview.png'
import { Btn, Container, Container2, Container3, Text, Img1, Img2, Img3, Img4, Img5 } from '../styles/Landing'

export default function Landing() {
    return (
        <Container>
            <Container2>
                <Img1 alt='#' src={asset1} />
                <Img2 alt='#' src={asset2} />
                <Img3 alt='#' src={asset3} />
                <Img4 alt='#' src={asset4} />
                <Img5  alt='#' src={asset5} />
                <Text>Discover what to eat based on personal preferences and data</Text>
                <Btn to='/home'>HOME PAGE</Btn> 
            </Container2>  
            <Container3 />    
        </Container>
    )
}