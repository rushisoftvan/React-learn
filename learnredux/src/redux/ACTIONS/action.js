import {ADD_COUNT, MINUS_COUNT, MULTIPALE_COUNT} from "./action-type";
import axios from "axios";

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

 const getData = ()=>{
     return (dispacth)=>{

        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then((res)=>{
                console.log(res.data);
               dispacth({
                   type:"SHOW_USER",
                   payload:res.data
               })
            })
            .catch(error =>{console.log(error)})
     }


}

export  {addCount,minusCount,multipaleCount,getData};
