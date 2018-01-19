import firebase from 'firebase';
import { firebaseAuth } from '../firebase';
import { SIGN_IN_SUCCESS } from '../constants/ActionTypes';

function authenticate(email,password) {
    return dispatch => {
        firebaseAuth.createUserWithEmailAndPassword(email,password)
          .then(result => console.log(result));
    }
}

export function signIn(email, password){
    return dispatch => {
        firebaseAuth.signInWithEmailAndPassword(email, password)
            .then((response) => {
                let info = {
                    uid: response.uid,
                    email: response.email
                }
                dispatch(signInSuccess(info))
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                console.log('fail')
        });
    }
}

export function signInSuccess(info){
  return {
    type: SIGN_IN_SUCCESS,
    info
  }
}

