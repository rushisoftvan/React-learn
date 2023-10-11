import ChildComponent from "./ChildComponent";
import {useCallback, useState} from "react";

function CallBack(){
    const[state,setState] = useState(0);

    const pluseState = ()=>{
        setState(state+1);
    }

    const learning = useCallback(  ()=>{
        console.log("rushikesh");
    },[]);

    return(
        <>


            <h3>CallBack</h3>
            {state}
            <button onClick={pluseState}>chaneState</button>
            <ChildComponent learning={learning}/>
        </>
    );
}
export default CallBack;