import {
    GET_PATIENT_BY_ID, IS_POP_UP_CLOSE,
    IS_POP_UP_OPEN,
    LOG_IN,
    PAIENT_DELETET,
    PATIENT_DELETE,
    SHOW_PATIENTS
} from "./PatientActiopntype";



const instialState = {
    jwt: "",
    loading: true,
    isLogged: false,
    patients: [],
    patientById: {},
    isDeletePopup:false


}

export const PatientReducer = (state = instialState, action) => {
    console.log(action.type);
    console.log(action.payload);
    switch (action.type) {
        case LOG_IN :
            return {
                ...state,
                jwt: action.payload.data,
                isLogged: action.payload.isLogin
            }
        case SHOW_PATIENTS :
            return {
                ...state,
                patients: action.payload
            }
        case PATIENT_DELETE :
            return {
                ...state,
                patients: state.patients.filter((patient) => patient.patientId !== action.payload),
                loading: true

            }
        case GET_PATIENT_BY_ID:
            return {
                ...state,
                patientById:action.payload
            }
        case IS_POP_UP_OPEN :
            console.log("isPOPupOPen");
            return {
                   ...state,
                isDeletePopup:true
               }
        case IS_POP_UP_CLOSE :
            return{
                ...state,
                isDeletePopup:false
            }

        default :
            return state;
    }
}