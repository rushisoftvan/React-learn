import logo from './logo.svg';
import './App.css';
import {Provider, useDispatch} from "react-redux";
import {connect} from "react-redux";
import React, {useEffect} from "react";
import ComponentA from "./redux/ComponentA";
import{useSelector} from "react-redux";
import {addCount, minusCount, multipaleCount} from "./redux/ACTIONS/action";
import ComponentOne from "./Components/ComponentOne";
import {showUser} from "./redux/ACTIONS/productaction";
import {CHANGE_PRICE_BY_ID, SHOW_USER} from "./redux/ACTIONS/product_type";
import {ADD_COUNT} from "./redux/ACTIONS/action-type";

import {ToastContainer} from "react-toastify";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Route, Routes} from "react-router-dom";
import Login from "./PatientMoule/Login";
import PrivateRoute from "./PatientMoule/PrivateRoute";
import Patients from "./PatientMoule/Patients";
import AddProduct from "./PatientMoule/./AddPatient";
import Patient from "./PatientMoule/Patient";
import DeleteModel from "./PatientMoule/Models/DeleteModel";






function App(props) {
    console.log(props);
     const count =useSelector((state)=> state.count)
    console.log(count,"rushikesh");
    //const dispatch=useDispatch();
     const ListOfproduct =  useSelector((products) => products.productList);
      console.log(ListOfproduct);
  const changePrice = ()=>{

      props.increaseCount();
  }
  const showUser = ()=>{
     console.log(props.product);
  }
  const showProductById = ()=>{
      props.showProductById(1);
  }



  return (

        <>
            <div className=" text-center">
             {/*<DeleteModel/>*/}
              <Patient/>
                {/*<h5>root</h5>*/}

            {/*    {props.reducer.count}*/}
            {/*    {props.product.productList.map(product=>{*/}

            {/*        return         <>*/}
            {/*                     <p>{product.productName} </p>*/}
            {/*                     <p>{product.productPrice}</p>*/}
            {/*                 </>*/}

            {/*    })}*/}

            {/*/!*</div>*!/*/}
            {/*/!*<button onClick={()=>dispatch(addCount())}>+</button>*!/*/}
            {/*/!*<button onClick ={()=>dispatch(minusCount())}>-</button>*!/*/}
            {/*/!*<button onClick={()=>dispatch(multipaleCount(5))}>Multipale</button>*!/*/}
            {/*  <button onClick={changePrice}>changeProductPrice</button>*/}
            {/*    <button onClick={showUser}>showUser</button>*/}
            {/*    <button onClick = {showProductById}>ById</button>*/}

            {/*<ComponentOne/>*/}
            {/*    <ProductModule/>*/}
                <ToastContainer position="top-center"/>
            </div>
        </>



  );
}

// const mapStateToProps = ((state)=>{
//     console.log(state);
//    return state;
// });



// const mapDispacthToPropes = (dispatch)=>{
//      return{
//          increaseCount : ()=>{
//              dispatch({type:"ADD_COUNT"})},
//          showUser: ()=>{dispatch({type:"SHOW_USER"})},
//          showProductById : (id)=>{dispatch({type:"CHANGE_PRICE_BY_ID",payload:id})}
//
//
//
//      }



export default  App;
