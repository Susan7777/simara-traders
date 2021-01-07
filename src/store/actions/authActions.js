import { message } from "antd";

export const signInAction = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            window.location.href = "/dashboard";
            dispatch({
                type: "LOGIN_SUCCESS"
            })
        }).catch(err => {
            message.success("Email or password incorrect!")
            dispatch({
                type: "LOGIN_ERROR",
                err
            });
        });
    };
};

export const signOutAction = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            window.location.href = "/";
            dispatch({
                type: "LOGOUT_SUCCESS"
            });
        })
    }
}