import React from 'react';
import {useNavigate} from "react-router-dom";
import "./Login.css";

const Login = ({isAuthenticated, toggleIsAuthenticated}) => {

    const navigate = useNavigate();

    function handleLogin() {
    toggleIsAuthenticated(true)
    navigate("/")
        console.log(isAuthenticated)
    }

    return (
        <article className="login-outer-container">
            <div className="login-inner-container">
                <h2>Login Pagina</h2>
                <p>Druk op de knop om in te loggen</p>
                <button
                    type="button"
                    onClick={handleLogin}
                >
                    Inloggen
                </button>
            </div>
        </article>

    );
};

export default Login;