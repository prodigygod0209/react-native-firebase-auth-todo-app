import firebase from 'firebase';
import { firebaseAuth,firebaseDb } from '../firebase';
import { SIGN_IN_SUCCESS } from '../constants/ActionTypes';

function authenticate(email,password) {
  return dispatch => {
    firebaseAuth.createUserWithEmailAndPassword(email,password)
      .then(result => console.log(result));
  }
}

export const signUp = (email, password) => {
  return dispatch => {
    firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(function(){
          loginUser = firebaseAuth.currentUser;
          console.log("登入使用者為", loginUser);
          firebaseDb.ref('users/' + loginUser.uid).set({
              email: loginUser.email,
          }).catch(function (error) {
              console.error("寫入使用者資訊錯誤", error);
          });
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
            // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
            // ...
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

