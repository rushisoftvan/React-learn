import ChildComponent from "./ChildComponent";
import {useState} from "react";

function ParentComponent() {
    const [state, setState] = useState("parentData");
    const [message, setName] = useState("");

    const getDatafromChild = (value) => {
        setName(value);
    }


    return <>
        <div className="card container mt-3 shadow-lg w-50 text-white bg-success">
            <div className="card-body">
                <p>Welcome Parent Component</p>
                <span>child Data : {message}</span>
                <ChildComponent name={state} getDatafromChild={getDatafromChild}/>
            </div>
        </div>

    </>
}

export default ParentComponent;