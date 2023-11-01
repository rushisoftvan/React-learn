import moment from "moment/moment";
import {addPatient} from "./service/PatientService";
import {ErrorMessage, Field, Formik} from "formik";
import DatePicker from "react-datepicker";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {fetchPatients, getPatientById, removePatient} from "./Redux/PatientAction";
import {connect} from "react-redux";

function UpdatePatient(props){
    console.log(props);
    console.log(props);
         const navigate = useNavigate();
           const param =  useParams();
           console.log(param);

    useEffect(() => {
        console.log("update use effect");
           props.patientGeById(param.id);



    }, []);
         function updatePatientHandler(){

         }

       return (
           <>
               <h3>UpdatePatient</h3>
               <div>
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
                           // validationSchema={SignupSchema}
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
                             handleSubmit,

                         } )=> (
                           <div className=" text-center">
                               <form onSubmit={handleSubmit}>
                                   <div className = "form-group">
                                       <label htmlFor="firstName" className="mt-1">First Name</label><br/>
                                       <Field  className="inputfield w-50 text-center" name="firstName" placeholder="Enter the first Name" onChange = {handleChange} value={props.state.patientById.firstName}  /><br/>
                                       {/*<ErrorMessage name="firstName" className="text-danger"/>*/}
                                       <ErrorMessage name='firstName' render={msg => <div className="text-danger">{msg}</div>}/>

                                   </div>
                                   <div className = "form-group mt-3">
                                       <label htmlFor="firstName">Last Name</label><br/>
                                       <Field  className="inputfield text-center w-50" name="lastName" placeholder="Enter The surname"  onChange = {handleChange} value = {props.state.patientById.lastName} /><br/>

                                       <ErrorMessage name='lastName' render={msg => <div className="text-danger">{msg}</div>}/>


                                   </div>
                                   <div className = "form-group mt-3">
                                       <label htmlFor="firstName">Email</label><br/>
                                       <Field  className="inputfield w-50 text-center "  name="email" placeholder="Enter The Email" onChange = {handleChange} value = {props.state.patientById.email} /><br/>
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
                                                           value = {props.state.patientById.dateOfBirth}
                                               />
                                           )}
                                       </Field><br/>
                                       <ErrorMessage name='dateOfBirth' render={msg => <div className="text-danger">{msg}</div>}/>
                                   </div>

                                   <div>

                                       <div mt-1>
                                           <label htmlFor="firstName" className="form-check-label">hasAllergy</label>
                                           <Field type="checkbox" name="hasAllergy"  defaultChecked={true} onChange={handleChange} className = "form-check-input ms-3" value = {props.state.patientById.hasAllergy} />
                                       </div>
                                       <div className="mt-3 mb-3">
                                           <label htmlFor="firstName" className="form-check-label">hasBloodPressure</label>
                                           <Field type="checkbox" name="hasBloodPressure"  defaultChecked={true} onChange={handleChange} className = "form-check-input ms-3"/>
                                       </div>


                                       <button type="submit"className="addBtn mb-2" defaultChecked={true} >Update Patient</button>
                                       <button type="submit"className="addBtn mb-2 ms-1" defaultChecked={true} >Cancel</button>
                                   </div>


                               </form>
                           </div>
                       )}
                   </Formik>
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
    return {
        patientGeById: (id) =>{
            dispatch(getPatientById(id))
        }

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(UpdatePatient);