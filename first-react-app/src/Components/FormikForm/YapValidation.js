import {useFormik} from "formik";
import * as yup from "yup";

function YapValidation() {
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
              Password: yup.required('Password should be Required'),
              Email:yup.required('Email is required').email('invalid email')
          }),
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        },

    });
    return (
        <>

            <div className="container">
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt>UserName</dt>
                        <dd><input type="text" name="UserName" value={formik.values.UserName} onChange={formik.handleChange}/></dd>
                        <dt>Password</dt>
                        <dd><input type="password" name="Password" value={formik.values.Password} onChange={formik.handleChange} /></dd>
                        <dt>Email</dt>
                        <dd><input type="text" name="Email" value={formik.values.Email} onChange={formik.handleChange}/></dd>
                        <dt>Mobile</dt>
                        <dd><input type="text" name="Mobile" value={formik.values.Mobile} onChange={formik.handleChange}/></dd>

                    </dl>
                   <button type="submit">Register</button>
                </form>
            </div>


        </>
    );
}

export default YapValidation;