import {Navigate} from "react-router-dom";
import {createContext, useState} from "react";



function PrivateRoute({children})
{



    return <>

            {
                localStorage.getItem("item")==="jwt"?children:<Navigate to="/login"/>
            }
           </>
}
export default PrivateRoute;
