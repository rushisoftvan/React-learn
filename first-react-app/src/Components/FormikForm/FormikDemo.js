import {Field, Formik, FormikProvider, useFormik} from "formik";

function FormikDemo() {
    function verifyUserDetails(userDetails) {
        const errors = {};
        if (userDetails.UserName == "") {
            errors.UserName = "user name is required";
        } else if (userDetails.UserName.length < 4) {
            errors.UserName = "user name should be length > 4"
        }
        if (userDetails.Password == "") {
            errors.Password = "password is required";
        } else if (userDetails.Password.length < 4) {
            errors.Password = "password should be length 4"
        }
        if (userDetails.Mobile == "") {
            errors.Mobile = "Mobile should be required";
        }
        if (userDetails.picked) {
            errors.picked = "please select gender";
        }
        if (userDetails.checked == []) {
            errors.checked = "checked is required";
        }
        return errors;
    }


    const formik = useFormik({
        initialValues: {
            UserName: '',
            Password: '',
            City: '',
            Mobile: '',
            checked: []

        },
        validate: verifyUserDetails,
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        },

    });
    return (
        <>
            <FormikProvider value={formik}>
                <div className="container">
                    <form onSubmit={formik.handleSubmit}>

                        <h2>Register User</h2>
                        <dl>
                            <dt>userName</dt>
                            <dd><input name="UserName" type="text" onChange={formik.handleChange}
                                       value={formik.values.UserName}/></dd>
                            <dd className="text-danger">{formik.errors.UserName}</dd>
                            <dt>Password</dt>
                            <dd><input name="Password" type="password" onChange={formik.handleChange}
                                       value={formik.values.Password}/></dd>
                            <dd className="text-danger">{formik.errors.Password}</dd>
                            <dt>Mobile</dt>
                            <dd><input type="text" name="Mobile" value={formik.values.Mobile}
                                       onChange={formik.handleChange}/></dd>
                            <dd className="text-danger">{formik.errors.Mobile}</dd>
                            <dt>City</dt>
                            <dd>
                                <select name="City" onChange={formik.handleChange} value={formik.values.City}>
                                    <option>Delhi</option>
                                    <option>Hyd</option>
                                </select>
                            </dd>
                            <dd className="text-danger">{formik.errors.City}</dd>
                            <dt>Gender</dt>
                            <dd><Field type="radio" name="picked" value="Male"/>
                                Male
                            </dd>
                            <dd><Field type="radio" name="picked" value="Female"/>Female</dd>
                            <dd><Field type="radio" name="picked" value="other"/>Other</dd>
                            <dd className="text-danger">{formik.errors.picked}</dd>
                            <dt>Checked</dt>
                            <dt><Field type="checkbox" name="checked" value="One"/>
                                One
                            </dt>
                            <dt><Field type="checkbox" name="checked" value="Two"/>
                                Two
                            </dt>
                            <dt><Field type="checkbox" name="checked" value="Three"/>
                                Three
                            </dt>
                        </dl>
                        <h2>UserDetails</h2>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </FormikProvider>

        </>
    );
}

export default FormikDemo;