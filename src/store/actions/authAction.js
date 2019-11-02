import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error
    };
};


export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let signInUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
        const API_KEY = 'AIzaSyDh2RodZbxHCMo3fu6NngwE3dmH5p0qdnI';
        let signUpUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
        let url = signUpUrl += API_KEY;
        if (!isSignup) {
            url = signInUrl + API_KEY;
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data));
            })
            .catch(error => {
                console.log(error)
                dispatch(authFail(error))
            })
    };
};