import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components'

const MainContainer = styled.div`
    display: grid;
    align-content: center;
`;

const Recipes = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 3.5rem;
    grid-row-gap: 2rem;
    margin: 4% 20%;
`;

const Loader = styled.img`
    width: 25rem;
    height: 22rem;
    justify-items: center;
    margin-left: 30%;
`;

const Reset = styled.button`
    width: 3.5rem;
    height: 2.3rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    color: #B7C0EE;
    border-radius: .5rem;
    border: 2px solid #B7C0EE;
    transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);

    &:hover {
        background-color: #B7C0EE;
        color: #FFFFFF;        
    }
`;

// CARD STYLES

const Card = styled.div`
    text-align: center;
    padding: 1rem .8rem;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Info = styled.div`
    padding: 1rem 0;

    span {
        background-color: #5ED697;
        border-radius: 1rem;
        padding: .4rem;
        font-size: .8rem;
        font-weight: 500;
        border-radius: 1rem;
        background-color: #5ED697;

        img {
            width: 1rem;
            heigth: 1rem;
            background-color: #5ED697;
            padding-right: .2rem;
        }
    }
`;

const CardImg = styled.img`
    border-radius: 1rem;
    width: 100%;
    height: 38vh;
    object-fit: cover;
`;

const LogoType = styled.img`
    width: 3rem;
    heigth: 3rem;
    margin: 0 .5rem .7rem 0;
    padding: .1rem;
`;

const CardLink = styled(Link)`
    text-decoration: none; 
    margin: .5rem;
    min-width: 6rem;
    padding: 0.4rem 1.2rem;
    border: none;
    background-color: #B7C0EE;
    color: #FFFFFF;
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
        background-color: #FFFFFF;
        color: #B7C0EE;
    }  
`;

const TypeContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const DietDiv = styled.div`
    display: flex;
    padding: 0.5rem 0;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;
    row-gap: 0.5rem;

    p {
        text-transform: capitalize;
        background-color: #B7C0EE;
        font-size: .8rem;
        font-weight: 500;
        border-radius: 1rem;
        padding: .2rem .4rem;
    }
`;

// SELECT MENU

const SelectContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const Select = styled.select`
    margin: .5rem;
    min-width: 6rem;
    padding: 0.5rem 1.5rem;
    border: none;
    background: #FFFFFF;
    color: #B7C0EE;
    border-radius: .5rem;
    border: 2px solid #B7C0EE;
    font-weight: bolder;
    cursor: pointer;
    font-size: 1rem;

    &:focus {
        outline: none;
    }

    option {
        text-transform: capitalize;
    }
`;

// PAGINATION

const PageContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 2rem 0;

    li {
        list-style: none;
        padding: 1rem;
    }
`;

const ButtonNum = styled.button`
    width: 1.7rem;
    height: 1.7rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    color: #B7C0EE;
    border-radius: .5rem;
    border: 2px solid #B7C0EE;
    transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);

    &:hover {
        background-color: #B7C0EE;
        color: #FFFFFF;        
    }

    &:focus {
        outline: none;
        color: #FFFFFF; 
        background-color: #B7C0EE;
    }
`;

const ButtonPage = styled.button`
    width: 6rem;
    height: 1.7rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    color: #B7C0EE;
    border-radius: .5rem;
    border: 2px solid #B7C0EE;
    transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);

    &:hover {
        background-color: #B7C0EE;
        color: #FFFFFF;        
    }
`;

const Error = styled.h2`
    font-size: 1rem;
    margin-bottom: 0;
    color: #FF877A;
    font-weight: bolder;
    height: 2rem;
    line-height: 3rem;
    text-align: center;
`;

// FILTER BUTTONS

const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const Btns = styled.button`
    text-decoration: none; 
    margin: .5rem;
    min-width: 6rem;
    padding: 0.4rem 1.2rem;
    border: none;
    background-color: #FFFFFF;
    color: #B7C0EE;
    border-radius: .5rem;
    border: 2px solid #B7C0EE;
    font-weight: bolder;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);

    ${props => props.vegetarian === true && css`
        &:focus {
            outline: none;
            background-color: #B7C0EE;
            color: #FFFFFF;
        }    

        &:active {
            outline: none;
            background-color: #B7C0EE;
            color: #FFFFFF;
        }
    `}

    ${props => props.vegan === true && css`
        &:focus {
            outline: none;
            background-color: #B7C0EE;
            color: #FFFFFF;
        }   
        
        &:active {
            outline: none;
            background-color: #B7C0EE;
            color: #FFFFFF;
        }
`}

    ${props => props.glutenFree === true && css`
        &:focus {
            outline: none;
            background-color: #B7C0EE;
            color: #FFFFFF;
        }   
        
        &:active {
            outline: none;
            background-color: #B7C0EE;
            color: #FFFFFF;
        }
    `}
    
    &:focus {
        outline: none;
        background-color: #B7C0EE;
        color: #FFFFFF;
    }   

    &:active {
        outline: none;
        background-color: #B7C0EE;
        color: #FFFFFF;
    }

    &:hover {
        background-color: #B7C0EE;
        color: #FFFFFF;
    }  
`;

const NotFoundContainer = styled.div`
    img {
        width: 100vw;
        height: 90vh;
        margin: 1rem 0;
    }
`;

export {
    MainContainer,
    Recipes,
    Card,
    CardLink,
    LogoType,
    CardImg,
    PageContainer,
    TypeContainer,
    Select,
    SelectContainer,
    Info,
    ButtonPage,
    ButtonNum,
    Error,
    Loader,
    DietDiv,
    Reset,
    Btns,
    BtnContainer,
    NotFoundContainer
}