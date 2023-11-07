import {useFormik} from "formik";
import './Login.css'
import {fetchProductList, removeProduct} from "../ProductModule/Redux/ProductAction";
import {connect} from "react-redux";

import axios from "axios";
import {LogInUser} from "./Redux/PatientAction";
import {useNavigate} from "react-router-dom";
import {userLogin} from "./service/PatientService";


function Login(props){
    const navigate =  useNavigate();
    console.log(props);
    console.log(props.state.isLogged);
     //console.log(props.state.jwt);
    const formik = useFormik({
        initialValues : {
            email : "",
            password:""

        },
        onSubmit:  (values) => {
                userLogin(values).then((res)=>{

                    if(res.data.code==200){
                       // localStorage.setItem("token",res.data.data);
                        sessionStorage.setItem('token', res.data.data);
                        
                        navigate("/patients");
                    }
                    console.log(res.data.code);
                    console.log(res.data.data);
                });
                console.log("onsubmit");
           //await props.login(values);
            //console.log("values");
            //navigate("/patients");
            // if(props.state.isLogged==true){
            //
            // }







            // axios.post("http://localhost:8080/login",values).then((res)=>{
            //     console.log(res);
            // })
            // console.log("logIn");
            // console.log(props);
            // props.login(values);
            // console.log(values);
            // alert(JSON.stringify(values));
        }
    })

    return (
        <>
            {

            }
                <div className="login">
                  <div className = "form">
                    <form onSubmit={formik.handleSubmit}>
                        <span>Login</span>
                        <input
                            type="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder="Enter email id / username"
                            className="form-control inp_text mt-1"

                        />
                            <input
                                type="password"
                                name="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                placeholder="Enter Password"
                                className="form-control inp_text mt-1"

                            />
                        <button type="submit">Login</button>
                    </form>
                  </div>
                </div>

        </>
    );
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return (
//         {
//             login: (logIn) =>{
//                 dispatch(LogInUser(logIn));
//
//             }
//
//
//         }
//     )
// }
export default  connect(mapStateToProps) (Login);