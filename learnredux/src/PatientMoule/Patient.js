import {Route,  Routes} from "react-router-dom";

import React from "react";
import Login from "./Login";
import Header from "./Header";
import Patients from "./Patients";
import PrivateRoute from "./PrivateRoute";

function Patient() {
    return (
        <>
            <Header/>
             <Routes>
                 <Route path="/" element={<Login/>}/>
                 <Route path="/login" element={<Login/>}/>
                 <Route path="/patients" element={
                     <PrivateRoute>
                         <Patients/>
                     </PrivateRoute>

                 }/>
             </Routes>
        </>
    )
}
export default Patient;