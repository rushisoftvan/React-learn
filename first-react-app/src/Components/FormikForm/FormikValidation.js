import {useState} from "react";


function FormikValidation(){

    function verifyUserDetails(userDetails){

    }

    return (
             <>
                 <h2>Register User</h2>
                 <dl>
                     <dt>User Name</dt>
                     <dd><input type="text"/> </dd>
                     <dt>Password</dt>
                     <dd><input type="text"/></dd>
                      <dt>Email</dt>
                      <dd><input type="text"/></dd>
                 </dl>
                 <button>Register</button>
             </>

    );
}
export default FormikValidation;