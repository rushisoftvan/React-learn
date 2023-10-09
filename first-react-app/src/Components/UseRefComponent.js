import {useRef, useState} from "react";



export default function useRefComponent(){
   // use ref return currunt object so that why when we have to use to it will not rerender
    console.log("useRefcomponent");
    const[state,setState] = useState(0);
  let num = useRef(0);
  let inputref= useRef(null);
  console.log(inputref.current);
    function handleClick(){
        setState(state+1);
        num.current++;
        console.log(num);
    }
      function handleUseRef(){
        inputref.current.focus();
        inputref.current.value=1000;
        console.log(inputref.current.value);
        inputref.current.style.display="none";
      }
    return(
        <>
           <p>useRef</p>
            <p>{state}</p>
             <input type="text" ref={inputref}/>
            <button onClick={handleClick}>change</button><br/>
            <button onClick={handleUseRef}>playwithdom</button>
        </>
    );
}