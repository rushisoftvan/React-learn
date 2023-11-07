import {
    DICURRUNTPAGE,
    GET_PATIENT_BY_ID, INCURRUNTPAGE, IS_POP_UP_CLOSE,
    IS_POP_UP_OPEN, LODER, LODERSTATESCHANGE,
    LOG_IN, PAGEDATA,
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
    isDeletePopup:false,
    totalPage:0,
    pageNo:0,
    lastPage:false,
    isFirstpage:false



}

export const PatientReducer = (state = instialState, action) => {
    console.log(action.type);
    console.log(action.payload);
     //console.log(action.payload['patientlist']);
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
        // case PATIENT_DELETE :
        //     return {
        //         ...state,
        //         patients: state.patients.filter((patient) => patient.patientId !== action.payload),
        //         loading: true
        //
        //     }
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
        case PAGEDATA :
            console.log(action.payload['patientlist']);
            return {
                ...state,
                patients: action.payload['patientlist'],
                totalPage:action.payload.totalPage,
                lastPage: action.payload.lastPage,
                loading: false,
                pageNo:action.payload.pageNo,
                isFirstpage:action.payload.firstPage

            }
        case LODERSTATESCHANGE :
            return  {

            ...state,
                loading: true

        }
        case  INCURRUNTPAGE :
            console.log(INCURRUNTPAGE);
            return {
                ...state,
                pageNo : state.pageNo+1

            }
        case DICURRUNTPAGE :
        return {
           ...state,
           pageNo: state.pageNo-1
        }



        default :
            return state;
    }
}