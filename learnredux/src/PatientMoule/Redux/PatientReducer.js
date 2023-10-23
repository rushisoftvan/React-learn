import {LOG_IN} from "./PatientActiopntype";

const instialState = {
    jwt:"",
    loading: true,

}

export const  PatientReducer = (state=instialState,action)=>{
    console.log(action.type);
    console.log(action.payload);
     switch (action.type){
         case LOG_IN :
          return {
              ...state,jwt: action.payload
          }

          default : return state;

     }
}