import {ADD_COUNT, MINUS_COUNT} from "./action-type";

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
export  {addCount,minusCount};
