import {Navigate, useNavigate} from "react-router-dom";
import React, {useContext, useState} from "react";


function Login(props) {

    const navigate = useNavigate();

    function logIn() {
        localStorage.setItem('item', "jwt")
        navigate("/dashboard");
    }

    return (
        <>
            <h3>Login</h3>
            <input type="text" placeholder="username"/><br/><br/>
            <input type="text" placeholder="password"/><br/><br/>
            <button onClick={logIn}>login</button>
        </>
    );
}

export default Login;