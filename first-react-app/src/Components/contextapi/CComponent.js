import {useContext, useEffect} from "react";

import {AppState} from "./Context";
function CComponent(){
  const data = useContext(AppState);




    return (
        <>
            <h3 className="CCompnent" >CCompnent</h3>
            <p> state is :{data.state}</p>
            <p>name is :{data.name}</p>
        </>
    );
}
export default CComponent;