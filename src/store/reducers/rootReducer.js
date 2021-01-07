import { combineReducers } from "redux";
import authReducer from "./authReducers";
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from "redux-firestore";
import addClientReducer from "./clientReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    client: addClientReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
})

export default rootReducer;