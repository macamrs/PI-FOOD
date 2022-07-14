import React from "react";
import { NavContainer, NavLink, Logo } from '../styles/Header'
import logo from '../assets/fried.png'
import SearchBar from "./SearchBar";

export default function Nav() {
    return (
        <NavContainer>
            <NavLink to='/'>
                <Logo alt="logo" src={logo} />
            </NavLink>
            <NavLink to='/home'>ALL RECIPES</NavLink>
            <NavLink to='/createrecipe'>FORM</NavLink>   
            <SearchBar />      
        </NavContainer>
    )
}