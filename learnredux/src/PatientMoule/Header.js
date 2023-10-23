import './header.css';
import {NavLink} from "react-router-dom";

function Header(){

    return (<>
        <div className="navbar">
            <ul>

                <li><NavLink className="decoration" to="/login">Add Patient</NavLink></li>
                <li><NavLink className="decoration" to="patients">Patients</NavLink></li>
                <li><NavLink className="decoration" to="/login">login</NavLink></li>
                {/*<li> <a href="#">Tutorial</a></li>*/}
                {/*<li><a href="#">Home</a></li>*/}

            </ul>


            {/*<a href="#news">News</a>*/}
            {/*<a href="#contact">Contact</a>*/}
            {/*<a href="#about">About</a>*/}

        </div>

             </>)
}
export default Header;