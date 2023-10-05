import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";


function About(){
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

     let handleClick = ()=>{
         navigate("/home");
     }
     let handleEvent = ()=>{
         console.log("rus");
     }
      useEffect(()=>{handleEvent()},[]);

   return(
       <>
           <h3>About</h3>
           <button className="btn btn-primary" onClick={handleClick}>gotohomepage</button>
       </>
   );
}

export default About;