import {connect} from "react-redux";

import React, {useEffect, useRef, useState} from "react";
import {fetchPatients, removePatient} from "./Redux/PatientAction";
import {useNavigate} from "react-router-dom";
import DeleteModel from "./Models/DeleteModel";
import {IS_POP_UP_OPEN} from "./Redux/PatientActiopntype";
import {current} from "@reduxjs/toolkit";
import {Button, InputGroup, Pagination} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

function Patients(props){

  
    console.log("patients");
    const navigate =useNavigate();
    console.log(props.state.patients);
    const idDelete = useRef(null);

    useEffect(() => {
        console.log("useEffect");
        props.showPatients();
    }, []);
    function navigateToAddPatient(){
        navigate("/addpatient");
    }
    function deletePatientByIdHandler(){
        props.removePatientHandler(idDelete.current);
        navigate("/patients");

    }

    function showPopUpHandler(id){
        props.showDeletePopUp();
        idDelete.current=id;
        console.log(idDelete.current);
    }





    function editHandler(id){
        navigate(`/updatePatient/${id}`);
    }

    return <>
        {
            props.state.isDeletePopup==true?<DeleteModel dt={deletePatientByIdHandler}/>:null
        }


        <h3 className="text-center">Patients</h3>
        <div className="container">
            <div className="text-start" style = {{display: 'flex'}}>
                <button className="btn btn-success" onClick={navigateToAddPatient}>Add Patient</button>
                <input className="form-control w-25 ms-1" type="text" placeholder="Search by Name" required />
                <button className="btn btn-primary">Search</button>
            </div>


            <hr className="hr" />
            <table className="table border mt-2">
                <thead className="thead-dark">
                <tr>

                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Allergy</th>
                    <th scope="col">BloodPressure</th>
                    <th scope="col">Date Of Birth</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>


                </tr>
                </thead>
                <tbody>
                {
                    props.state.patients.map((patient)=>{
                        return  <tr>

                            <td>{patient.firstName}</td>
                            <td>{patient.lastName}</td>
                            <td>{patient.email}</td>
                            {
                                patient.hasAllergy==true?<td>YES</td>:<td>NO</td>
                            }
                            {
                                patient.hasBloodPressure==true?<td>YES</td>:<td>NO</td>
                            }
                            <td>{patient.dateOfBirth}</td>
                            <td><button className="btn btn-primary" onClick={()=>{editHandler(patient.patientId)}} >Edit</button></td>
                            <td><button className="btn btn-danger" onClick={()=>{showPopUpHandler(patient.patientId)}}>Delete</button></td>
                        </tr>
                    })
                }


                </tbody>
            </table>

            <div>
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>
        </div>

    </>
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showPatients: () =>{
            dispatch(fetchPatients())
        },
        removePatientHandler : (id,navigate)=>{
            dispatch(removePatient(id,navigate))
        },
        showDeletePopUp : ()=>{
            dispatch({type:IS_POP_UP_OPEN})
        }

    }
}




export default connect(mapStateToProps,mapDispatchToProps)(Patients);


































































































































































































































































































































































































































































































