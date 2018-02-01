import {
ADD_TO_LIST,
DELETE_TODO_LIST,
CHANGE_TODO_LIST,
GET_TODO_LIST
} from '../constants/ActionTypes';
import { firebaseDb } from '../firebase';

export function getTodoList(uid) {
  return dispatch => {
    firebaseDb.ref('users/' + uid).on('value', snap => {
      const items = [];
      snap.forEach(child => {
        items.push({
          key: child.key,
          content: child.val().content,
          completed: false
        })
      })
      dispatch(getDataSuccess(items));
    });
  }
}

export function deleteData(uid,key){
    firebaseDb.ref('users/' + uid).child(key).remove()
}

export const addTodoList = (uid) => {
  return text => {
    firebaseDb.ref('users/' + uid).push().set({
      content: text
    })
  }
}

export const editTodoList = (uid) => {
  return (text,id) => {
    firebaseDb.ref('users/' + uid + '/' + id ).set({
      content: text
    })
  }
}

const getDataSuccess = (items) => {
  return {
    type: GET_TODO_LIST,
    items
  }
}
