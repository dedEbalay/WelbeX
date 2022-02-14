import "./style.css";
import React from "react";
import homeLogo from "./HomeLogo.svg"
import noteLogo from "./NoteLogo.png"
import { NavLink } from "react-router-dom";

function Header() {
 return (
    <div className="navbar">
        <NavLink to="/" className="navbar-home-link">
            <img className="navbar-home-link__img" alt="Домик" src={homeLogo}/>
            <span>ДОМОЙ</span>
        </NavLink>
        <NavLink to="/todos" className="navbar-list-link">
            <img className="navbar-list-link__img" alt="Блокнотик" src={noteLogo}/>
            <span>К СПИСКУ</span>
        </NavLink>
    </div>
 )
}

export default Header;