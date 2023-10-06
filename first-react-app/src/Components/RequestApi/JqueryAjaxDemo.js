
 import $ from 'jquery'
 import {useEffect, useState} from "react";
function JqueryAjaxDemo(){

   const [products,setProduct] =useState([]);

    useEffect(()=>{
        $.ajax({
           method : "GET",
           url :"https://fakestoreapi.com/products",
            success: function(response){
                setProduct(response);
            }
        });
    },[])
    return(

          <div className="container">
              {
                  products.length>0 && products.map((product)=>{
                      return <ul>
                               <li>{product.id}</li>
                               <li>{product.title}</li>
                              </ul>
                  })
              }
          </div>

            );
}
export default JqueryAjaxDemo;