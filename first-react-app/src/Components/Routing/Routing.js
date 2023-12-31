import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import React from "react";
import UserProfile from "./UserProfile";
import Company from "./Company";
import Other from "./Other";
import Login from "./Login";
import LogOut from "./LogOut";
import Product from "./Product";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "./DashBoard";


function Routing() {
    const id = 1;
    const name = "rushikesh";
    const productId = 1;
    const productName = "Mobile";

    return (
        <>

            <h3>Routing</h3>

            <div className="row">
                <div className="col-md-3">
                    <NavLink className="decoration" to="home">Click to view our home page</NavLink><br/>
                    {/*<NavLink to={`product?productid=${productId}&productName=${productName}`}>use serach params</NavLink><br/>*/}
                    <NavLink to={{
                        pathname: '/product',
                        search: `?productId=${productId}&productName=${productName}`
                    }}>use serach params</NavLink><br/>
                    <NavLink className="decoration" to="about">Click to view our about page</NavLink><br/>
                    <NavLink className="decoration" to="contact">Click to view our contact page</NavLink><br/>
                    <NavLink className="decoration" to={`user/${id}/${name}`} state={{name: "abhi", age: 21}}>Click to
                        view with user id</NavLink><br/>
                    <NavLink className="decoration" to="login">Click to view our login page</NavLink><br/>
                    <NavLink className="decoration" to="logout">Click to view our logout page</NavLink><br/>
                    <NavLink className="decoration" to="dashboard">Click to view our dashboard</NavLink><br/>
                </div>


                <div className="col-md-9">
                    <Routes>
                        <Route path="/" element={
                            <PrivateRoute>
                                <Home/>
                            </PrivateRoute>
                        }/>
                        <Route path="/home" element={
                            <PrivateRoute>
                                <Home/>
                            </PrivateRoute>
                        }/>
                        <Route path="product" element={<Product/>}/>
                        <Route path="/about" element={
                            <PrivateRoute>
                                <About/>
                            </PrivateRoute>
                        }
                        />
                        <Route path="/contact" element={
                            <PrivateRoute>
                                <Contact/>
                            </PrivateRoute>

                        }>
                            <Route path="company" element={<Company/>}/>
                            <Route path="other" element={<Other/>}/>
                        </Route>
                        <Route path="user/:id/:name" element={
                            <PrivateRoute>
                                <UserProfile/>
                            </PrivateRoute>

                        }/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="dashboard" element={
                            <PrivateRoute>
                                <DashBoard/>
                            </PrivateRoute>

                        }/>
                        <Route path="logout" element={<LogOut/>}/>
                        <Route path="*" element={
                            <code>Not found : page you requested</code>
                        }/>
                    </Routes>
                </div>
            </div>


        </>
    );


}

export default Routing;