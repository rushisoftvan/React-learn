import {combineReducers,applyMiddleware, createStore} from "redux";
import reducer from "./reducer";
import ProductReducer from "./ACTIONS/ProductReducer";
import thunk from "redux-thunk";

const mainReducer = combineReducers({
    reducer : reducer,
     product :ProductReducer
})


const store = createStore(mainReducer,applyMiddleware(thunk));


export default store;