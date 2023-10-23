import {applyMiddleware, createStore} from "redux";

import thunk from "redux-thunk";
import {PatientReducer} from "./PatientReducer";


export const  PatientStore = createStore(PatientReducer,applyMiddleware(thunk));

