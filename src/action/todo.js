import {
ADD_TO_LIST,
DELETE_TODO_LIST,
CHANGE_TODO_LIST 
} from '../constants/ActionTypes';
import { firebaseDb } from '../firebase';

export const addTodoList = (uid) => {
    return text => {
      firebaseDb.ref('users/' + uid).push().set({
        content: text
    })
  }
}