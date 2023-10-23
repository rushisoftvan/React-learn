import axios from "axios";

const  PRODUCT_API_BASE_URL="http://localhost:8080";
export class PatientService{

    static logIn(login){
        return axios.post(PRODUCT_API_BASE_URL+"/"+"login",login);
    }

}