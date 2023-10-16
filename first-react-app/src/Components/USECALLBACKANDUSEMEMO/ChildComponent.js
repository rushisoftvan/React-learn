import {memo} from "react";

function ChildComponent(props){
    console.log("childComponent");
    return (
        <>
            <h3>ChildComponent</h3>
        </>
    );
}

export default memo(ChildComponent);