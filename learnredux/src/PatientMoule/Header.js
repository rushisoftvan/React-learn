import './header.css';
import {NavLink} from "react-router-dom";

function Header(){

    return (<>
        <div className="navbar">
            <ul>

                <li><NavLink className="decoration" to="/addpatient">Add Patient</NavLink></li>
                <li><NavLink className="decoration" to="patients">Patients</NavLink></li>
            </ul>
        </div>
             </>)
}
export default Header;