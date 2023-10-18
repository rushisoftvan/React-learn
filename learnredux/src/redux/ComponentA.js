import {connect, useDispatch} from "react-redux";

function ComponentA(props){
  console.log(props,"componentOne");

    return (
        <>
            <button >changestate</button>
        </>
    );


}



export default ComponentA;