import { Link } from 'react-router-dom';
import styled from 'styled-components'
import background from '../assets/160.jpg'

const Container = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100vh;

    @media screen and (max-width: 1095px) {
        grid-template-columns: 100%;
    }
`;

const Container2 = styled.div`
    grid-column: 1 / 2;
    background-color: rgba(94, 214, 151, 0.56);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1095px) {
        background-image: url(${background});
        background-repeat: repeat;
        background-size: contain;
    }
`;

const Img1 = styled.img`
    position: absolute;
    z-index: 1;
    top: 0;
    right: 50%;
    overflow: hidden;
    background-color: transparent;

    @media screen and (max-width: 1095px) {
        display: none;
    }
`;

const Img2 = styled.img`
    position: absolute;
    z-index: 1;
    overflow: hidden;
    top: 70%;
    left: 0;
    background-color: transparent;

    @media screen and (max-width: 1095px) {
        display: none;
    }
`;

const Img3 = styled.img`
    position: absolute;
    z-index: 1;
    overflow: hidden;
    top: 8%;
    left: 20%;
    overflow: hidden;
    background-color: transparent;

    @media screen and (max-width: 1095px) {
        display: none;
    }
`;

const Img4 = styled.img`
    position: absolute;
    z-index: 1;
    overflow: hidden;
    top: 55%;
    right: 50%;
    overflow: hidden;
    background-color: transparent;

    @media screen and (max-width: 1095px) {
        display: none;
    }
`;

const Img5 = styled.img`
    position: absolute;
    z-index: 1;
    overflow: hidden;
    top: 18%;
    left: 0;
    overflow: hidden;
    background-color: transparent;

    @media screen and (max-width: 1095px) {
        display: none;
    }
`;

const Text = styled.div`
    font-weight: 800;
    font-size: 3.5rem;
    line-height: 3.5rem;
    color: #FFFFFF;
    letter-spacing: .2rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
    background: transparent;
    display: grid;
    justify-content: start;
    align-items: center;
    padding: 2rem;

    @media screen and (max-width: 1095px) {
        background-color: rgba(94, 214, 151, 0.8);
        font-size: 2rem;
    }
`;

const Container3 = styled.div`
    grid-column: 2 / 3;
    background-image: url(${background});
    background-repeat: repeat;
    background-size: contain;

    @media screen and (max-width: 1095px) {
        display: none;
    }
`;

const Btn = styled(Link)`
    background: #B7C0EE;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.31);
    border-radius: 1rem;
    letter-spacing: .1rem;
    border: none;
    padding: .1rem 5rem;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.4rem;
    line-height: 4rem;
    text-align: center;
    color: #FFFFFF;
    transition: all 0.2s ease-in;
    margin: 2.5rem;

    &:hover {
        cursor: pointer;
        background: #FFFFFF;
        color: #B7C0EE;
    }

    @media screen and (max-width: 1095px) {
        font-size: .8rem;
        padding: .5rem 4rem;
    }
`;

export {
    Btn,
    Container,
    Container2,
    Container3,
    Text,
    Img1,
    Img2,
    Img3,
    Img4,
    Img5
}