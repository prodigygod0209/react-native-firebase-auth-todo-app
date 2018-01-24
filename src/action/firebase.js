import firebase from 'firebase';
import { firebaseAuth,firebaseDb } from '../firebase';
import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from '../constants/ActionTypes';

function authenticate(email,password) {
  return dispatch => {
    firebaseAuth.createUserWithEmailAndPassword(email,password)
      .then(result => console.log(result));
  }
}

export const signUp = (email, password, navigation) => {
  return dispatch => {
    firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(function(response){
        let info = {
          uid: response.uid,
          email: response.email
        }
        dispatch(signInSuccess(info))
        navigation.navigate('Main')
      })      
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
          if (errorCode == 'auth/email-already-in-use') {
            console.log('The password is too weak.');
          }
      });
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
      console.log('fail');
    });
  }
}

const signInSuccess = (info) => {
  return {
    type: SIGN_IN_SUCCESS,
    info
  }
}

const signOut = () => {

}