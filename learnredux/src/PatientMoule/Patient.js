import {Route, Routes} from "react-router-dom";

import React from "react";
import Login from "./Login";
import Header from "./Header";
import Patients from "./Patients";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "././AddPatient";
import {connect} from "react-redux";
import UpdatePatient from "./UpdatePatient";
import DeleteModel from "./Models/DeleteModel";
import NavHeader from "../Components/NavHeader";

function Patient(props) {
    console.log(props.state.isLogged, 'sachin');

    return (
        <>

            <Routes>
                <Route path="/" element={

                    <Login/>
                }/>

                <Route path="/login" element={<Login/>}/>
                <Route path="/patients" element={
                    <PrivateRoute>
                        <Patients/>
                    </PrivateRoute>

                }/>
                <Route path="/addpatient" element={
                    <PrivateRoute>
                        <AddProduct/>
                    </PrivateRoute>
                }/>
                <Route path="updatePatient/:id" element={
                    <PrivateRoute>
                        <UpdatePatient/>
                    </PrivateRoute>

                }></Route>
                <Route path="/deleteModal" element={<DeleteModel/>}></Route>

            </Routes>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}


export default connect(mapStateToProps)(Patient);