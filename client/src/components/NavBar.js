import React, {useContext} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {AuthContext} from "../context/Auth.context";

export const NavBar = () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        navigate('/');
    }
    return (
        <nav>
            <div className="nav-wrapper blue darken-1">
                <span className="brand-logo">Logo</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Create</NavLink></li>
                    <li><NavLink to="/links">Links</NavLink></li>
                    <li><NavLink to="/" onClick={logoutHandler}>logout</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}