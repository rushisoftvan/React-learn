import {useEffect,useState} from "react";


function LifeCycleMethod()
{
    const[state,setState] = useState("sachin");


    function changeState(){
        setState("abhi");
    }

    useEffect(() => {
        console.log("useEffect"); // when component come first time on screen at that ttime it run
         return ()=>{
             console.log("after Remove");// when component will remove from screen at that time it will learn

         }

    }, [state]);// when  we have to run this code when the state will change


     return (
       <>
           <p>LifecycleMethod</p>
           <span>{state}</span>
           <button onClick={changeState}>changeState</button>
       </>
     );

}

export default LifeCycleMethod;