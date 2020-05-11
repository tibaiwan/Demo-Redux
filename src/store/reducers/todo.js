import * as T from '../actionTypes';

const defaultState = {
  isLoading: true,
  todolist: []
}

export const reducerTodo = (state = defaultState, actions) => {
  switch (actions.type) {
    case T.INIT_TODO:
      return { ...state, todolist: actions.todolist, isLoading: false };
    case T.ADD_TODO:
      return { ...state, todolist: state.todolist.concat(actions.text) };
    case T.DELETE_TODO:
      return { ...state, todolist: state.todolist.filter((item, index) => index !== actions.index) };
    default:
      return state
  }
}
