import './App.css';

import { Fragment } from 'react';
import ConditionalRendering from "./Components/ConditionalRendering";
import ListRendering from "./Components/ListRendering";
import ParentComponent from "./Components/ParentComponent";
import ContactApp from "./Components/ContactApp";




let App = ()=> {
  return (
    <Fragment>
      <h1 className="text-center bg-black text-white">Root App</h1>
      {/*<MessageCard item="Mobile"/>*/}
      {/*<ShoppingComponents/>*/}
      {/*  <Product/>*/}
        <div className="row">
           <div className="col-md-4">
               <ConditionalRendering/>
           </div>
            <div className="col-md-8">
                <ListRendering/>
            </div>
        </div>


            <ParentComponent/>
        <ContactApp/>

    </Fragment>
  );
}

export default App;
