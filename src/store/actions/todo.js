import * as T from '../actionTypes';

export const initTodo = todolist => ({
  type: T.INIT_TODO,
  todolist
});

export const addTodo = text => ({
  type: T.ADD_TODO,
  text
});

export const deleteTodo = index => ({
  type: T.DELETE_TODO,
  index
});
