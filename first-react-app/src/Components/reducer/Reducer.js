import {useReducer} from "react";

const initialstate=0;
const reducer = (state,action)=>{
    console.log("reducer");
    switch(action){
        case  "Increment" :
            return state+1;
        case "Decrement" :
              return state-1
        default :
            return state;
    }
}
function Reducer(){
    const [count,dispatch ] = useReducer(reducer,initialstate)
    return (
        <>
            <button className="mt-3" onClick={()=> dispatch("Increment")}>Increment</button>
            <p>{count}</p>
            <button onClick={()=>dispatch("Decrement")}>decrement</button>
        </>
    );

}
export default Reducer;