import ProductService from "../ProductService";
import {ADD_PRODUCT, DELETE_PRODUCT, MAKE_REQUEST, PRODUCT_LIST} from "./producttype";
import axios from "axios";
import productService from "../ProductService";
import {toast} from "react-toastify";

 const makeRequest=()=>{
    return{
        type:MAKE_REQUEST
    }
}

 const deleteUser=(id)=>{
    return{
        type:DELETE_PRODUCT,
        payload :id
    }
}

export const addProduct = (product)=>{
    return (dispatch) => {
       ProductService.addProduct(product).then((res)=>{
           if(res.data.statusCode==201){
               dispatch(fetchProductList())
              toast("Product is added");
               dispatch({
                   type : ADD_PRODUCT, payload:"sucess"
               });
           }

       });
   }
}

export const fetchProductList = ()=>{

    return (dispatch)=>{
        dispatch(makeRequest());
        // axios.get('https://jsonplaceholder.typicode.com/todos/1')
        ProductService.getProducts()
    .then((res)=>{
        console.log(res.data);
        dispatch({
            type:PRODUCT_LIST,
            payload:res.data.data
        })
    })
    .catch(error =>{console.log(error)})
}

    }


// axios.get('https://jsonplaceholder.typicode.com/todos/1')
//     .then((res)=>{
//         console.log(res.data);
//         dispacth({
//             type:"SHOW_USER",
//             payload:res.data
//         })
//     })
//     .catch(error =>{console.log(error)})
// }

export const  removeProduct = (id)=>{

    return (dispatch)=>{
        productService.deleteProduct(id).then((res)=>{
            //console.log(res.data.statusCode);
            if(res.data.statusCode==200){
                //dispatch(fetchProductList());
                dispatch({
                    type :DELETE_PRODUCT,
                    payload : id
                });
            }
        });
    }




}

export const getProductById = (id)=>{
     ProductService.getProductById(id).then((res)=>{
         console.log(res)
     })
}
