import { Link } from 'react-router-dom';
import styled from 'styled-components'

const NavContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    background-color: #B7C0EE;
    margin-bottom: 2rem;
    box-shadow: -12px -14px 20px 14px rgb(0 0 0 / 20%);
`;

const NavLink = styled(Link)`
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    position: relative;
    background-color: #B7C0EE;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
`;

const Container = styled.div`
    max-width: 20rem;
    border: none;
    background: #FFFFFF;
    color: #B7C0EE;
    border-radius: 1rem;
    border: 2px solid #B7C0EE;
    font-size: 1rem;
    display: flex;
    justify-content: center;
`;

const Search = styled.input`
    padding: .5rem;
    border: none;
    background: #FFFFFF;
    font-weight: bolder;
    font-size: 1rem;
    border-radius: 1rem;

    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    border: none;
    background: #FFFFFF;
    color: #B7C0EE;
    cursor: pointer;
    border-radius: 1rem;
    padding-right: 1rem;
`;

const Logo = styled.img`
    width: 3rem;
    heigth: 3rem;
    background-color: #B7C0EE;
`;


export {
    NavContainer,
    NavLink,
    Search,
    Container,
    Button,
    Logo
}