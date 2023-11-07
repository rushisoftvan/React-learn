import {connect} from "react-redux";

import React, {useEffect, useRef, useState} from "react";
import {fetchPatients, fetchPatientsBasedOnPage, removePatient} from "./Redux/PatientAction";
import {json, useNavigate} from "react-router-dom";
import DeleteModel from "./Models/DeleteModel";
import {DICURRUNTPAGE, INCURRUNTPAGE, IS_POP_UP_OPEN, LODERSTATESCHANGE, PAGEDATA} from "./Redux/PatientActiopntype";
import {current} from "@reduxjs/toolkit";
import {Button, InputGroup, Pagination} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {deletePatient, getPatientsByPage} from "./service/PatientService";
import {toast} from "react-toastify";
import SpinnerExample from "./Models/SpinnerExample";
import tr from "react-datepicker";


function Patients(props){
    // const [data,setData]  = useState([]);
    // const[noOfpage,setNoOfPage] = useState(0);
    // const[pageNo,setPageNo] = useState();
    // const[lastPage,setLastPage]  = useState();




    const navigate =useNavigate();
    // console.log(props.state.patients);
    const idDelete = useRef(null);
    const[searchValue,setSerachValue]=useState("");
       const[id,setId] =useState();

    useEffect(() => {
        console.log("useEffect");
        // props.showPatients();
        // props.lodingProcess();
        props.showPatientsPage(1);
        navigate("/patients");
    }, []);
    // useEffect(()=>{
    //     //
    //     console.log("useEffect 2 start")
    //     getPatientsByPage().then((res)=>{
    //         console.log(res);
    //         console.log(res.data.data.patientlist);
    //         setData(res.data.data.patientlist);
    //         setNoOfPage(res.data.data.totalPage);
    //         setPageNo(res.data.data.pageNo);
    //          // setPageNo(res.data.data.)
    //         setLastPage(res.data.data.lastPage);
    //     });
    // },[])
       function serachHandler(){
       console.log("serachHandler");
       props.showPatientsPage(1,searchValue);
   }
   const onChangeHandler = (e)=>{
       setSerachValue(e.target.value.trim());
       console.log(searchValue);
    }

    function navigateToAddPatient(){
        navigate("/addpatient");
    }
    function deletePatientByIdHandler(){
       // props.removePatientHandler(idDelete.current,navigate);
        deletePatient(idDelete.current).then((res)=>{
            console.log(res);
            if(res.data.code==200){
                 toast.success("Patient has been deleted");
                props.showPatientsPage(props.state.pageNo);
                 navigate("/patients");
            }
        });



    }
    function changePage(index)
    {
        console.log(index);

        // getPatientsByPage(index).then((res)=>{
        //     console.log(res);
        // });
        props.showPatientsPage(index,searchValue);
        window.scroll(0,0);

    }

    function showPopUpHandler(id){
        props.showDeletePopUp();
        idDelete.current=id;
        console.log(idDelete.current);
    }

    function handlePre(){
         console.log("handle");
          // console.log("handle");
        if(props.state.pageNo<props.state.totalPage){
            props.incrementPageNo();


                changePage(props.state.pageNo+1);



        }

    }
    function handleNext(){
        if(props.state.isFirstpage==false){
            props.decrementPageNo();
            changePage(props.state.pageNo-1)
        }
    }





    function editHandler(id){
        navigate(`/updatePatient/${id}`);
    }

    return <>

        {
            props.state.isDeletePopup==true?<DeleteModel dt={deletePatientByIdHandler}/>:null
        }


        <h3 className="text-center">Patients</h3>
        {
            props.state.loading==true?<SpinnerExample/>:null
        }
        <div className="container">
            <div className="text-start" style = {{display: 'flex'}}>
                <button className="btn btn-success" onClick={navigateToAddPatient}>Add Patient</button>
                <input className="form-control w-25 ms-1" type="text" placeholder="Search by Name" required onChange={onChangeHandler} />
                <button className="btn btn-primary" onClick={serachHandler}>Search</button>
            </div>


            <hr className="hr"/>
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
                {/*<tbody>*/}
                {/*{*/}
                {/*    props.state.patients.map((patient)=>{*/}
                {/*        return  <tr>*/}

                {/*            <td>{patient.firstName}</td>*/}
                {/*            <td>{patient.lastName}</td>*/}
                {/*            <td>{patient.email}</td>*/}
                {/*            {*/}
                {/*                patient.hasAllergy==true?<td>YES</td>:<td>NO</td>*/}
                {/*            }*/}
                {/*            {*/}
                {/*                patient.hasBloodPressure==true?<td>YES</td>:<td>NO</td>*/}
                {/*            }*/}
                {/*            <td>{patient.dateOfBirth}</td>*/}
                {/*            <td><button className="btn btn-primary" onClick={()=>{editHandler(patient.patientId)}} >Edit</button></td>*/}
                {/*            <td><button className="btn btn-danger" onClick={()=>{showPopUpHandler(patient.patientId)}}>Delete</button></td>*/}
                {/*        </tr>*/}
                {/*    })*/}
                {/*}*/}


                {/*</tbody>*/}
                <tbody>
                {     props.state.patients.length>0?
                        props.state.patients && props.state.patients.map((patient)=>{
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



                        }) :

                        <tr>
                    <td colSpan={8}>
                        <label className="text-danger">Patient Not Available</label>
                </td>
               </tr>
                }
                </tbody>
            </table>
            {
                props.state.patients.length!==0

                ? <div disabled={props.state.patients.length==0}>
                    <Pagination >
                        <Pagination.Prev  disabled={props.state.pageNo==1} onClick={()=>{handleNext()}}>&laquo; Previous</Pagination.Prev>
                        {
                            [...Array(props.state.totalPage)].map((item,index)=>{
                                    console.log(index);


                                    return  <Pagination.Item  active={index==props.state.pageNo-1} key={index} onClick={(e)=>{changePage(index+1)}}>
                                        {index+1}
                                    </Pagination.Item>
                                }
                            )
                        }

                        <Pagination.Next disabled={props.state.lastPage==true} onClick={()=>{handlePre()}} >Next &raquo;</Pagination.Next>

                    </Pagination>
                </div> : null

            }

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
        },
        showPatientsPage : (index,serachText)=>{
            dispatch(fetchPatientsBasedOnPage(index,serachText))
        },
        lodingProcess : ()=>{
            dispatch({type:LODERSTATESCHANGE})
        },
        incrementPageNo : ()=>{
            dispatch({type:INCURRUNTPAGE})
        },
        decrementPageNo : ()=>{
            dispatch({type:DICURRUNTPAGE})
        }

    }
}




export default connect(mapStateToProps,mapDispatchToProps)(Patients);


































































































































































































































































































































































































































































































