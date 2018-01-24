const Todo = (state = { items: []}, action) => { 
  switch (action.type) {
    case 'GET_TODO_LIST':
      return {
        ...state,
        items: action.items
      }
    default:
      return state;
  }
}

export default Todo;