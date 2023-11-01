import {Button, Modal} from "react-bootstrap";
import React, {useState} from "react";
import './DeleteModal.css';
import {connect} from "react-redux";
import {fetchPatients, removePatient} from "../Redux/PatientAction";
import {IS_POP_UP_CLOSE, IS_POP_UP_OPEN} from "../Redux/PatientActiopntype";

function DeleteModel(props){
    console.log(props);


    console.log(props,"delete");
     const [deleteId,setDeleteId] =  useState(null);
    function deletePatientHandler(){
         props.dt();
         props.hideDeletePopUp();

    }

    return (
        <div
            className="deleteModal show"
            style={{ display: 'block', position: 'relative'}}
        >
            <Modal.Dialog>
                    <div className="dHeader">
                        <Modal.Title>Are you Sure?</Modal.Title>
                    </div>
                <Modal.Body>
                    <p>Do you really want to delete these records?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>props.hideDeletePopUp()} >Close</Button>
                    <Button variant="primary" onClick={deletePatientHandler}>Delete</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        isDeletePopupValue:state.isDeletePopup

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showDeletePopup : ()=>{
            dispatch({type:IS_POP_UP_OPEN})
        },
        hideDeletePopUp : ()=>{
            dispatch({type:IS_POP_UP_CLOSE})
        }


    }
}


export default connect(mapStateToProps,mapDispatchToProps)(DeleteModel);