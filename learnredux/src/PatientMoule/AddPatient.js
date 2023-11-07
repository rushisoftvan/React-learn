import {ErrorMessage, Field, Formik} from "formik";
import './addPatient.css';
import {useNavigate} from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {connect} from "react-redux";
import {addPatient, getPatientById, userLogin} from "./service/PatientService";
import moment from "moment";
import * as yup from "yup";

const SignupSchema  = yup.object({

        firstName: yup.string().required('First Name is Required')
            .matches(/[a-zA-Z]/,{message :'First Name Should Be Alphabate'}),
        lastName: yup.string().required('LastName should be Required'),
        email:yup.string().required('Email is required')
            .email('invalid email'),
            // .matches(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)    ,
        dateOfBirth:yup.string().required('Date Of Birth Required')
})

 // import 'react-calendar/dist/Calendar.css';
function  AddPatient(props){
    console.log("addPatient");
    console.log(props.state.jwt);
    const navigate  = useNavigate();



  function onCancel(){
     // navigate("/patients");
      getPatientById().then(res=>{
          console.log(res);
      });
  }

    return (<>
           <div>
               <h3>Add Patient</h3>
               <Formik initialValues={
                   {
                       firstName:'',
                       lastName:'',
                       email:'',
                       hasAllergy:false,
                       hasBloodPressure:false,
                       dateOfBirth:null

                   }
               }
                       validationSchema={SignupSchema}
                       onSubmit={(values)=>
               {
                   const date = values.dateOfBirth;
                   const  patient = {
                       firstName:values.firstName,
                       lastName:values.lastName,
                        email:values.email,
                      hasAllergy:values.hasAllergy,
                   hasBloodPressure:values.hasBloodPressure,
                   dateOfBirth:moment(date).format("YYYY-MM-DD")

                   }
                   console.log(patient);

                   addPatient(patient).then((res)=>{
                       console.log(res);
                       navigate("/patients");
                   });
                   console.log(values);
                    console.log("add pat");
                  //addPatients(values,props.state.jwt);
               }


               }>
                   {({
                       errors,
                       touched,
                       handleBlur,
                       handleChange,
                       isSubmitting,
                       values,
                       handleSubmit
                   } )=> (
                   <div className=" text-center">
                       <form onSubmit={handleSubmit}>
                           <div className = "form-group">
                               <label htmlFor="firstName" className="mt-1">First Name</label><br/>
                               <Field  className="inputfield w-50 text-center" name="firstName" placeholder="Enter the first Name" onChange = {handleChange} /><br/>
                               {/*<ErrorMessage name="firstName" className="text-danger"/>*/}
                               <ErrorMessage name='firstName' render={msg => <div className="text-danger">{msg}</div>}/>

                           </div>
                           <div className = "form-group mt-3">
                               <label htmlFor="firstName">Last Name</label><br/>
                               <Field  className="inputfield text-center w-50" name="lastName" placeholder="Enter The surname" onChange = {handleChange} /><br/>

                               <ErrorMessage name='lastName' render={msg => <div className="text-danger">{msg}</div>}/>


                           </div>
                           <div className = "form-group mt-3">
                               <label htmlFor="firstName">Email</label><br/>
                               <Field  className="inputfield w-50 text-center "  name="email" placeholder="Enter The Email" onChange = {handleChange} /><br/>
                               <ErrorMessage name='email' render={msg => <div className="text-danger">{msg}</div>}/>
                           </div>

                           <div>
                               <label htmlFor="firstName">Date</label><br/>
                               <Field name="dateOfBirth"  >
                                   {({ field, form }) => (
                                       <DatePicker className="inputfield text-center"
                                           id="date"
                                           {...field}
                                           selected={field.value}
                                           onChange={(dateOfBirth) => form.setFieldValue(field.name, dateOfBirth)}
                                       />
                                   )}
                               </Field><br/>

                               <ErrorMessage name='dateOfBirth' render={msg => <div className="text-danger">{msg}</div>}/>

                           </div>

                           <div>

                           <div mt-1>
                               <label htmlFor="firstName" className="form-check-label">hasAllergy</label>
                               <Field type="checkbox" name="hasAllergy"  defaultChecked={true} onChange={handleChange} className = "form-check-input ms-3"/>
                           </div>
                           <div className="mt-3 mb-3">
                           <label htmlFor="firstName" className="form-check-label">hasBloodPressure</label>
                           <Field type="checkbox" name="hasBloodPressure"  defaultChecked={true} onChange={handleChange} className = "form-check-input ms-3"/>
                          </div>


                               <button type="submit"className="addBtn mb-2" defaultChecked={true} >Add Patient</button>
                               <button type="submit"className="addBtn mb-2 ms-1" defaultChecked={true} onClick={onCancel}>Cancel</button>
                           </div>


                       </form>
                   </div>
                       )}
               </Formik>
           </div>



          </>);
}

const mapStateToProps = (state) => {
    return {
        state
    }
}


// const mapDispatchToProps = (dispatch) => {
//     return (
//         {
//             addPatient: (patient,jwt) =>{
//                 const token = {"Authorization":`Bearer ${jwt}`}
//                 dispatch((addPatient(patient,token)));
//
//             }
//
//
//         }
//     )
// }
export default connect(mapStateToProps) (AddPatient);

// validationSchema : yup.object({
//     UserName: yup.string().required('User Name is Required')
//         .min(4,'Number to short'),
//     Password: yup.string().required('Password should be Required'),
//     Email:yup.string().required('Email is required').email('invalid email'),
//     Mobile:yup.string().required('Mobile no is required')
// }),