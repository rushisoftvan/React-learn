import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {fetchProductList, removeProduct} from "./Redux/ProductAction";
import {get} from "axios";

function UpdateProduct(props){
   const param =   useParams();
   console.log(param.id);
    useEffect(() => {

    }, []);
    return (
        <>
         <h3>updateProduct</h3>

        </>
    );
}
const mapDispatchToProps = (dispatch) => {
      return {
         getProductById : (id)=>{
             dispatch(gteProductById(id));
         }
      }
}

export default UpdateProduct;

