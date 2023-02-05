import React from 'react';
import "./Navigation.css"
import {NavLink, useNavigate} from "react-router-dom";

const Navigation = ({isAuthenticated, toggleIsAuthenticated}) => {
    const navigate = useNavigate();

    function handleLogOut() {
        toggleIsAuthenticated(false);
        navigate("/")
    }

    return (
        <nav>
            <div className="navigation-container">
                <ul>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    {isAuthenticated === true ?
                        <>
                            < li>
                                < NavLink
                                    className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                    to="/blogposts">
                                    Blogpost
                                </NavLink>
                            </li>
                            <li>
                                <button type="button"
                                        onClick={handleLogOut}>
                                    Uitloggen
                                </button>
                            </li>
                        </> :
                        <li>
                            <NavLink
                                className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                to="/login">
                                Login
                            </NavLink>
                        </li>
                    }
                </ul>
            </div>
        </nav>

    );
};

export default Navigation;