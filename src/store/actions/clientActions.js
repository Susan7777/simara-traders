import { message } from "antd";


export const addClientAction = (client) => {
    return (dispatch, getState, { getFirebase }) => {
        //make async call to database
        const firestore = getFirebase().firestore();

        firestore.collection("clients").add({
            ...client
        }).then(() => {
            message.success("Client detail added!").then(() => {
                window.location.href = "/";
            });
            dispatch({
                type: "ADD_CLIENT_SUCCESS",
                client
            })
        }).catch(err => {
            message.success("Client detail failed to add!").then(() => {
                window.location.href = "/";
            });
            dispatch({
                type: "ADD_CLIENT_ERROR",
                err
            });
        });
    };
};

export const removeClientAction = (clientId) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        firestore.collection("clients").doc(clientId).delete().then(() => {
            message.success("Client detail deleted!");
            dispatch({
                type: "REMOVE_CLIENT_SUCCESS"
            })
        }).catch(err => {
            message.success("Client detail failed to delete!");
            dispatch({
                type: "REMOVE_CLIENT_ERROR",
                err
            });
        });
    };
};

export const updateClientAction = (clientId, client) => {
    return (dispatch, getState, { getFirebase }) => {
        //make async call to database
        const firestore = getFirebase().firestore();

        firestore.collection("clients").doc(clientId).update({
            ...client
        }).then(() => {
            message.success("Client detail updated!").then(() => {
                window.location.href = "/";
            });
            dispatch({
                type: "UPDATE_CLIENT_SUCCESS",
                client
            })


        }).catch(err => {
            message.success("Client detail failed to update!").then(() => {
                window.location.href = "/";
            });
            dispatch({
                type: "UPDATE_CLIENT_ERROR",
                err
            });
        });
    };
};