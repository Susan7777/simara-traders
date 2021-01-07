
const initState = {

}

const addClientReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_CLIENT_SUCCESS": {
            console.log("Client Added");
            return state
        }
        case "ADD_CLIENT_ERROR": {
            console.log("Client add fail");
            return state;
        }
        case "REMOVE_CLIENT_SUCCESS": {
            console.log(("Client removed success"));
            return state;
        }
        case "REMOVE_CLIENT_FAILED": {
            console.log("Client removed failed");
            return state;
        }
        case "GET_CLIENT_BY_ID_SUCCESS": {
            return state;
        }
        case "GET_CLIENT_BY_ID_ERROR": {
            return state;
        }
        case "UPDATE_CLIENT_SUCCESS": {
            return state;
        }
        case "UPDATE_CLIENT__ERROR": {
            return state;
        }
        default: return state;

    }
}

export default addClientReducer;