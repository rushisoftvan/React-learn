import {createContext, useState} from "react";
import AComponent from "./AComponent";

const AppState = createContext(null);

function Context() {

    const [state, setState] = useState('rushikesh');
    const[name,setName] = useState("abhi");
    console.log(state);
    console.log(name);

    return (
        <div className="context">
            <AppState.Provider value={{state,name}}>
                <h3>ContextApi</h3>
                <AComponent/>
            </AppState.Provider>
        </div>
    );
}


export  {AppState,Context};
