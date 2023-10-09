import {useFormik} from "formik";
import * as yup from "yup";
import {useState} from "react";

function YapValidation() {
    console.log("yup validation");
    const [state , setState]=useState(0);

    let num=0;

    const formik = useFormik({
        initialValues: {
            UserName: '',
            Password: '',
            Email:'',
            Mobile: ''
        },
          validationSchema : yup.object({
              UserName: yup.string().required('User Name is Required')
                  .min(4,'Number to short'),
              Password: yup.string().required('Password should be Required'),
              Email:yup.string().required('Email is required').email('invalid email'),
              Mobile:yup.string().required('Mobile no is required')
          }),
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        },

    });

    function handleClick(){
        setState(state+1);
        console.log(state);
        num++;
        console.log(num);
    }
    return (
        <>

            <div className="container">
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt>UserName</dt>
                        <dd><input type="text" name="UserName" value={formik.values.UserName} onChange={formik.handleChange}/></dd>
                        <dd className="text-danger">{formik.errors.UserName}</dd>
                        <dt>Password</dt>
                        <dd><input type="password" name="Password" value={formik.values.Password} onChange={formik.handleChange} /></dd>
                        <dd className="text-danger">{formik.errors.Password}</dd>
                        <dt>Email</dt>
                        <dd><input type="text" name="Email" value={formik.values.Email} onChange={formik.handleChange}/></dd>
                        <dd className="text-danger">{formik.errors.Email}</dd>
                        <dt>Mobile</dt>
                        <dd><input type="text" name="Mobile" value={formik.values.Mobile} onChange={formik.handleChange}/></dd>
                        <dd className="text-danger">{formik.errors.Mobile}</dd>
                    </dl>
                   <button type="submit">Register</button>
                </form>
            </div>
            <p>{state}</p>
            <button onClick={handleClick}>changestate</button>


        </>
    );
}

export default YapValidation;