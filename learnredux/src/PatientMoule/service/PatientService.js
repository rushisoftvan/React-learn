import axios from "axios";
import axiosInstance from "../axois/axoiseInstance";




export  async function userLogin(userLogInDetails){

       console.log(userLogInDetails);
       return await axios.post("http://localhost:8080/auth/login",userLogInDetails);

}

export async function addPatient(patient){

       // const config = {
       //        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` }
       // }

       let tokenStr = sessionStorage.getItem("token");
       console.log(tokenStr);

       return await axios.post("http://localhost:8080/patients",patient, { headers:
                  {
                         'content-type':'application/json',
                         'accept':'application/json',
                         "Authorization" : `Bearer ${tokenStr}`}
       });

}
export async function getPatientById(){
       let webUrl = "http://localhost:8080/patients/1";
       // const headers = { Authorization: `Bearer ${sessionStorage.getItem("token")}` };
       return await axios.get(webUrl,{
              headers:
                  {   'content-type':'application/json',
                         'accept':'application/json',
                         'Authorization':`Bearer ${sessionStorage.getItem('token')}`
                  }});
}

export async function fetchPatientList()
{
    const config = {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
            'content-type':'application/json',
            'accept':'application/json',
        }
    };
   return await axiosInstance.get("patients/all",config);
}

export async function deletePatient(id){
    const config = {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
            'content-type':'application/json',
            'accept':'application/json',
        }
    };
    return await  axiosInstance.delete(`patients/${id}`,config);
}

export async function  fetchPatientById(id){
    const config = {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
            'content-type': 'application/json',
            'accept': 'application/json',
        }
    }
        return await axiosInstance.get(`patients/${id}`,config);
}

export async function updatePatientUseById(patient,id){
    const config = {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
            'content-type': 'application/json',
            'accept': 'application/json',
        }
    }
    return await axiosInstance.put(`patients/${id}`,patient,config);
}

export async function getPatientsByPage(page){
    const config = {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`,
            'content-type': 'application/json',
            'accept': 'application/json',
        }

}
    return await axios.post("patients/page",page,config);
}
