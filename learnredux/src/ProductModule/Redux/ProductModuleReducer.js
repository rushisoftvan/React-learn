
import {ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCT_BY_ID, MAKE_REQUEST, PRODUCT_LIST} from "./producttype";
const initialstate = {
    loading: true,
    productList: [],
    productObj: {},
    errorMessage: ''
}
export const  productReducer = (state=initialstate,action)=>{
    console.log(action.type);
    console.log(action.payload);
   switch(action.type)
   {
       case MAKE_REQUEST : {

           return {
               ...state,loading: false
           }
       }

       case PRODUCT_LIST : {
           return {
               ...state,
               loading:false,
               productList: action.payload,
               errorMessage:''
           }
       }
       case ADD_PRODUCT :
           return {
               ...state,
               loading:false

           }

       case DELETE_PRODUCT:return {

                  ...state,
                  productList: state.productList.filter(product=>{ return product.productId!==action.payload}),
                  loading:false,

             }
       case  GET_PRODUCT_BY_ID :
                return {
                    ...state,
                    productObj:action.payload,
                    loading: false
                }

       default : return state
   }
}