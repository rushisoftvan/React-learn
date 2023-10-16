import ChildComponent from "./ChildComponent";
import {useCallback, useMemo, useState} from "react";
import ChildComponentOne from "./ChildComponentOne";

function ChildComponent1() {
    return null;
}

function CallBack(){
    const[state,setState] = useState(0);

    const pluseState = ()=>{
        setState(state+1);
    }

    const learning = useCallback(  ()=>{
        console.log("rushikesh");
    },[]);

    const name = useMemo(() => {
              getName();
    }, []);

       function getName(){
           return  'rushikesh';
       }
    return(
        <>


            <h3>CallBack</h3>
            {state}
            <button onClick={pluseState}>chaneState</button>
            <ChildComponent learning={learning}/>
            <ChildComponentOne name={name}/>
        </>
    );
}
export default CallBack;