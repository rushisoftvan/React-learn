import {useLocation, useNavigate} from "react-router-dom";


function About(){
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    function handleClick(){
        navigate("/home")
    }
   return(
       <>
           <h3>About</h3>
           <button className="btn btn-primary" onClick={handleClick}>gotohomepage</button>
       </>
   );
}

export default About;