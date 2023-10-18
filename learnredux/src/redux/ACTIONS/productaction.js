import {CHANGE_PRICE_BY_ID, SHOW_USER} from "./product_type";

const showUser = ()=>{
    return {
        type:SHOW_USER
    }
}
const  changePriceById = (id)=>{
   return{
       type:CHANGE_PRICE_BY_ID,
       payLoad : id
   }
}
export {showUser,changePriceById};