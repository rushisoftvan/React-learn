import {NavLink, Outlet, useParams} from "react-router-dom";
import Company from "./Company";
import React from "react";


function Contact(){

    return (
        <>
            <h3>Contact</h3>
            <NavLink to="company" >company</NavLink>
            <NavLink to="other">other</NavLink>
            <Outlet/>
        </>
    );
}
export default Contact;