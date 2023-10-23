import {useFormik} from "formik";
import './Login.css'
import {fetchProductList, removeProduct} from "../ProductModule/Redux/ProductAction";
import {connect} from "react-redux";
import {logInUser} from "./Redux/PatientAction";
import axios from "axios";

function Login(props){
    const formik = useFormik({
        initialValues : {
            email : "",
            password:""


        },
        onSubmit: (values) => {
           props.login(values);
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

const mapDispatchToProps = (dispatch) => {
    return (
        {
            login: (logIn) =>{
                dispatch(logInUser(logIn));
            }


        }
    )
}
export default  connect(mapStateToProps,mapDispatchToProps) (Login);