import logo from './logo.svg';
import './App.css';
import {Provider, useDispatch} from "react-redux";
import store from "./redux/store";
import React from "react";
import ComponentA from "./redux/ComponentA";
import{useSelector} from "react-redux";
import {addCount, minusCount, multipaleCount} from "./redux/ACTIONS/action";






function App() {
     const count =useSelector((state)=> state.count)
    const dispatch=useDispatch();
  return (
        <>
            <div className="App">

                <h5>root</h5>
                {count}
            </div>
            <button onClick={()=>dispatch(addCount())}>+</button>
            <button onClick ={()=>dispatch(minusCount())}>-</button>
            <button onClick={()=>dispatch(multipaleCount(5))}>Multipale</button>
        </>



  );
}

export default App;
