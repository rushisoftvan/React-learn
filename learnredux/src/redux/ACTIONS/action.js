import {ADD_COUNT, MINUS_COUNT, MULTIPALE_COUNT} from "./action-type";

 const addCount = ()=>{
    return {
        type: ADD_COUNT
    }
}

 const  minusCount = ()=>{
    return {
        type :MINUS_COUNT
    }
}

const multipaleCount = (value)=>{
     return {
         type:MULTIPALE_COUNT,
         payload:value
     }
}
export  {addCount,minusCount,multipaleCount};
