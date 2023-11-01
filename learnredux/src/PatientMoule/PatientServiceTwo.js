import axios from "axios";

const  PRODUCT_API_BASE_URL="http://localhost:8080";


      export function logIn(login){
        return axios.post(PRODUCT_API_BASE_URL+"/auth/login",login);
    }

        export function  addPatients(patientDetails,token){
           return  axios.post(PRODUCT_API_BASE_URL+"/patients",patientDetails,{
               header: token,
               'Accept':'application/json',
               'Content-Type':'application/json'
           })

}