import {
ADD_TO_LIST,
DELETE_TODO_LIST,
CHANGE_TODO_LIST,
GET_TODO_LIST
} from '../constants/ActionTypes';
import { firebaseDb } from '../firebase';

export const addTodoList = (uid) => {
    return text => {
      firebaseDb.ref('users/' + uid).push().set({
        content: text
    })
  }
}

const getTodoSuccess = (items) => {
  return {
    type: GET_TODO_LIST,
    items
  }
}

export function getTodoList(uid) {
  return dispatch => {
    dispatch(getTodoSuccess(getdata(uid)));
  }
}

function getdata(uid){
  let items = [];
  firebaseDb.ref('users/' + uid).on('value', snap => {
    snap.forEach(child => {
      items.push({
        key: child.key,
        content: child.val().content
      })
    })
  })   
  return items
}