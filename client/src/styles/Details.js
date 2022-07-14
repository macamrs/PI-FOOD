import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    justify-items: center;
    margin: 2%;
    align-items: start;
    grid-gap: 2rem;

    @media screen and (max-width: 1325px) {
        grid-template-columns: 100%;
        margin: 4%;
    }
`;

const BackBtn = styled(Link)`
    text-decoration: none; 
    margin: .5rem;
    min-width: 6rem;
    padding: 0.5rem 1.5rem;
    border: none;
    background-color: #FFFFFF;
    color: #B7C0EE;
    border-radius: .5rem;
    border: 2px solid #B7C0EE;
    font-weight: bolder;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: #B7C0EE;
        color: #FFFFFF;
    }  
`;

const Image = styled.img`
    grid-column: 1 / 2;
    border-radius: 1.5rem;
    padding-top: 1rem;
    box-shadow: 0px 20px 20px 0px rgb(0 0 0 / 20%);

    @media screen and (max-width: 1325px) {
        width: 80%;
        height: 78%;
    }
`;

const Info = styled.div`
    grid-column: 2 / 3;
    width: 92%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.5rem;

    @media screen and (max-width: 1325px) {
        grid-column: 1 / 2;
    }
`;

const OptionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 1rem;
    row-gap: 1rem;

    p {
        text-transform: capitalize;
        background-color: #B7C0EE;
        border-radius: 1rem;
        font-weight: bold;
        padding: .5rem;
    }
`;

const Score = styled.div`
    display: flex;
    column-gap: .7rem;
    align-items: center;
    background-color: #5ED697;
    border-radius: 1rem;
    padding: .5rem;

    img {
        width: 2rem;
        heigth: 2rem;
        background-color: #5ED697;
    }

    p {
        font-weight: bold;
        background-color: #5ED697;
    }
`;

const InstructionContainer = styled.div`
    span {
        background-color: #B7C0EE;
        border-radius: 45%;
        font-weight: bolder;
        padding: 0.35rem 0.5rem;
    }
`;

const IndividualContainer = styled.div`
    display: flex;
    column-gap: 1rem;
    row-gap: 1rem;
    align-items: center;
    padding: 1rem 0;
`;

export {
    Container,
    Image,
    Info,
    OptionsContainer,
    Score,
    InstructionContainer,
    IndividualContainer,
    BackBtn
}