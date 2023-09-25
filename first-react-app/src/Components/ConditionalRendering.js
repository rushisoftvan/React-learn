import {useState} from "react";


function ConditionalRendering() {
    const [state, setState] = useState(false)

    const logIn = () => {
        setState(true)
    }

    const logOut = () => {
        setState(false);
    }

    return <>


        <h3>Conditional Rendering</h3>
        <div className="card w-75 bg-white text-center">
            <div className="card-body">
                {
                    state ?
                        <p>Welcome Mr sachin</p> :
                        <p>Welcome Guest !</p>
                }
                {
                    state ?
                        <button className="btn btn-success ms-1 " onClick={logOut}>logOut</button> :
                        <button className="btn btn-primary " onClick={logIn}>login</button>
                }


            </div>

        </div>
    </>
}

export default ConditionalRendering;