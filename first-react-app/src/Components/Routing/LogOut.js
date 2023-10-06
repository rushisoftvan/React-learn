import React from "react";
import {Route, useNavigate} from "react-router-dom";


function LogOut() {
    const navigate = useNavigate();

    function logOut() {
        localStorage.clear();
        navigate("/login");
    }

    return <>
        <button onClick={logOut}>Logout</button>
    </>

}

export default LogOut;