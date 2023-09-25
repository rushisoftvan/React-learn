import {useState} from "react";

function ChildComponent(props) {

    const [childData, setChildData] = useState("child data");


    function sendDatatoParent() {
        props.getDatafromChild(childData)
    }

    return <>
        <div className="card">
            <div className="card-body text-center">
                {props.name}
                <p>Welcome Child Component</p>
                <span>{childData}</span><br/><br/>
                <button onClick={sendDatatoParent} className="btn btn-primary">sendDataToParaent</button>
            </div>
        </div>

    </>
}

export default ChildComponent;