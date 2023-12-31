import {
    GET_PATIENT_BY_ID, LODERSTATESCHANGE,
    LOG_IN,
    PAGEDATA,
    PATIENT_DELETE,
    PATIENTS_DELETE,
    SHOW_PATIENTS
} from "./PatientActiopntype";
import {toast} from "react-toastify";
import axoiseInstance from "../axois/axoiseInstance";
import {
    deletePatient,
    fetchPatientById,
    fetchPatientList,
    getPatientsByPage,
    updatePatientUseById
} from "../service/PatientService";
import updatePatient from "../UpdatePatient";
import {checkIsLogedIn} from "../service/authService";
import {Navigate} from "react-router-dom";
import React from "react";


// export const  LogInUser = (logIn)=>{
//
//     // console.log(logIn);
//     return (
//    async (dispatch) =>{
//
//       await PatientService.logIn(logIn).then((res)=>{
//                 if(res.data.code===200){
//                     toast.success("login successfully");
//                     dispatch({
//                         type:LOG_IN,
//                         payload:{
//                             isLogin : true,
//                                 data : res.data.data
//                         }
//                     })
//
//
//                 } else {
//                     for(let message of res.data.errors){
//                         toast.error(message);
//                     }
//                     dispatch({
//                         type:LOG_IN,
//                         payload:{
//                             isLogin: false,
//                             data:""
//                         }
//                     })
//                 }
//             }).catch((error)=> {
//               console.error(error)
//
//             });
//     //     PatientService.logIn(logIn).then((res =>{
//     //         console.log(res);
//     //     }))
//      })
//
// }
//
// export const  addPatient = (patient,header)=> {
//     console.log(header);
//     PatientService.addPatient(patient,header).then((res) => {
//          console.log(res);
//     }).catch((e)=>{
//         console.log(e);
//     })
// }


export const fetchPatients = () => {
    return (dispacth) => {
        console.log("fetch");
        fetchPatientList().then((res) => {

            console.log(res);
            dispacth({
                type: SHOW_PATIENTS,
                payload: res.data.data
            });


        }).catch((e) => {
            console.log(e);
        })
    }
}
export const removePatient = (id, navigate) => {
    // console.log(navigate);
    return (dispacth) => {
        deletePatient(id).then((res) => {
            console.log(res);
            if (res.status == 200) {

                console.log("suni");
                // fetchPatients();

                //fetchPatientsBasedOnPage(1);

                navigate("/patients");

                dispacth({
                    type: PATIENT_DELETE,

                })
            }


        }).catch((e) => {
            console.log(e);
        })
    }
}

export const getPatientById = (id) => {

    return (dispacth) => {
        fetchPatientById(id).then((res) => {
            console.log(res.data.data)
            dispacth({
                type: GET_PATIENT_BY_ID,
                payload: res.data.data
            })
        })
    }

}

export const updatePatientById = (patientDetail, id) => {

    return (dispacth) => {
        updatePatientUseById(patientDetail, id).then((res) => {
            console.log(res);
        }).catch((e) => {
            console.log(e);
        })
    }
}


export const fetchPatientsBasedOnPage = (index, searchText) => {
    console.log("fetchPatientsBasedOnPage calling");
    return (dispacth) => {
           dispacth({type : LODERSTATESCHANGE})
        getPatientsByPage(index, searchText).then((res) => {
            console.log(res.data.code);
            if (res.data.code == 200) {
                dispacth({
                    type: PAGEDATA,
                    payload: res.data.data
                })
            }
            if(res.data.code==401){
                console.log("please log in");
            }
        })
    }


}
