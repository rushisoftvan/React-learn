import {Link, Outlet, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";


function Routing(){


     return(
         <>

             <h3>Routing</h3>
             <div className="row">
                 <div className="col-md-3">
                     <Link to="contact">Click to view our contact page</Link>
                     <Link to="about">Click to view our about page</Link>
                     <Link to="contact">Click to view our contact page</Link>
                 </div>
                 <div className="col-md-9">
                     <Outlet/>
                 </div>
             </div>
             <Routes>
                 <Route path="/" element={ <Home/>}/>
                 <Route path="/home" element={<Home/>} />
                 <Route path="/about" element={<About/>}/>
                 <Route path="/contact" element={<Contact/>}/>
                 <Route path="*" element={
                     <code>Not found : page you requested</code>
                 }/>
             </Routes>

         </>
     );




}
export default Routing;