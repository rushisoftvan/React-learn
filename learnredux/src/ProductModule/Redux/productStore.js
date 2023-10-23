import {productReducer} from "./ProductModuleReducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";


const productStore = createStore(productReducer,applyMiddleware(thunk));


export default productStore;