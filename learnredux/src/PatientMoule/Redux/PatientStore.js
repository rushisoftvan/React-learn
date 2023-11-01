import {applyMiddleware, createStore} from "redux";
import {PatientReducer} from "./PatientReducer";

import thunk from "redux-thunk";


import {persistStore,persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

// const persistConfig = {
//     key:'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig,PatientReducer);
//
// export const   patientStore = createStore(persistedReducer,applyMiddleware(thunk));
//
// export const persistor = persistStore(patientStore);

// export  default PatientStore;






export const  PatientStore = createStore(PatientReducer,applyMiddleware(thunk));

