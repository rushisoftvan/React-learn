import {PatientService} from "../PatientService";
import axios from "axios";
import {PRODUCT_LIST} from "../../ProductModule/Redux/producttype";
import {LOG_IN} from "./PatientActiopntype";
import {toast} from "react-toastify";

export const logInUser = (logIn)=>{
    // console.log(logIn);
    return (
        (dispatch)=>{

            axios.post("http://localhost:8080/login",logIn).then((res)=>{
                console.log(res.data.data);
                console.log(res.status);
                if(res.status==200){
                    toast.success("login successfully");
                    dispatch({
                        type:LOG_IN,
                        payload:res.data.data


                    })
                }


            }).catch((error)=> {
               console.log(error.response.data.message);
               toast.error(error.response.data.message);

            });
    //     PatientService.logIn(logIn).then((res =>{
    //         console.log(res);
    //     }))
     })

}