import styled, {css} from 'styled-components'
import background from '../assets/background.jpg'

const Main = styled.div`
    // background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
`;

const FormContainer = styled.form`
    background-color: transparent;
    max-width: 70rem; 
    margin:4px auto;
    padding: 1rem;
`;

const InputContainer = styled.div`
    background-color: transparent;

    input {
        font-weight: 500;
        font-size: 1rem;
        border-radius: 5px;
        line-height: 22px;
        background-color: #FFFFFF;
        border:2px solid #B7C0EE;
        transition: all 0.3s;
        padding: 13px;
        margin-bottom: 15px;
        width:100%;
        box-sizing: border-box;
        outline:0;
    }

`;

const Label = styled.label`
    background-color: transparent;
    font-size: 1.2rem;  
    font-weight: bold;
`;

const Error = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0;
    color: #FFFFFF;
    display: none;
    text-align: center;
    background-color: #E11600; 

    ${props => props.valid === 'true' && css`
        display: none;
    `}

    ${props => props.valid === 'false' && css`
        display: block;
    `}
`;

const ErrorMsg = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0;
    text-align: center;
    color: #FFFFFF;
    background-color: #E11600;
    padding: 0 1rem;

    // ${props => props.valid === null && css`
    //     display: none;
    // `}
`;

const Success = styled.p`
    color: #5ED697;
    font-size: 1rem;
    font-weight: bolder; 
`;

const Fail = styled.p`
    font-size: 1rem;
    margin-bottom: 0;
    color: #FF877A;
    font-weight: bolder;
    height: 2rem;
    line-height: 3rem;
`;

const SendBtn = styled.button`
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

const Title = styled.h1`
    background-color: transparent;
    font-weight: bolder;
    letter-spacing: .2rem;
    font-size: 3rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
    padding-bottom: 1rem;
`;

const DietContainer = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-content: center;
    flex-wrap: wrap;
    width: 12rem; 
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    row-gap: 0.5rem;

    input {
        background-color: transparent;
    }
`;

const Diets = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    column-gap: 0.5rem;
    row-gap: 1rem;
    flex-wrap: wrap;

    input[type=checkbox] {
        cursor: pointer;
        background-color: transparent;
        color: #0D1E2B;
    }

    span {
        background-color: transparent;
        font-weight: bolder;
        text-transform: capitalize;
        padding: 0 0.5rem;
    }
`;

const DietsDiv = styled.div`
    background-color: transparent;
    display: flex;
    align-items: center;
`;

const AddBtn = styled.button`
    padding: 0.5rem 1.5rem;
    border: none;
    background-color: #B7C0EE;
    color: #FFFFFF;
    border-radius: .5rem;
    border: 2px solid #B7C0EE;
    font-weight: bolder;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);

    &:hover {
        background-color: #B7C0EE;
        color: #FFFFFF;
    }     
`;

const RemoveBtn = styled.button`
    margin: .5rem;
    padding: .2rem;
    border: none;
    border-radius: .5rem;
    border: 2px solid #red;
    font-weight: bolder;
    cursor: pointer;
    font-size: 1rem; 
`;

export {
    Main,
    FormContainer,
    Error,
    Success,
    Fail,
    ErrorMsg,
    SendBtn,
    Title,
    InputContainer,
    Label,
    DietContainer,
    Diets,
    DietsDiv,
    AddBtn,
    RemoveBtn
}

/*
COLOR SCHEME
#FFFDFC - White
#FF877A - Congo Pink
#B7C0EE - Lavander Blue
#5ED697 - Medium Aquamarine
*/