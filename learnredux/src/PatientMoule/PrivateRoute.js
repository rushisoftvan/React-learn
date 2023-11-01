import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import React from "react";
import {checkIsLogedIn} from "./service/authService";

function PrivateRoute({children}){
 console.log("private Route")


 return checkIsLogedIn()?children : <Navigate to="/login"/>

    // return (
    //     <>
    //         {
    //
    //             //localStorage.getItem("root") ==auth ? children : <Navigate to="/login"/>
    //             (
    //                 //localStorage.getItem("token")===true ? children : <Navigate to="/login"/>
    //             return authService.isLoggedIn() ? children : <Navigate to="/login" />
    //             )
    //
    //         }
    //
    //      </>);

}

const mapStateToProps = (state) => {
    return {
        auth :  state.isLogged

    }
}

export default connect(mapStateToProps,null)(PrivateRoute);