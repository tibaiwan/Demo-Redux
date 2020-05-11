import fetch from 'cross-fetch';
import * as T from '../actionTypes';
import { API_getTodoList } from '../api';

export const initTodo = () => {
    return dispatch => fetch(API_getTodoList).then(response => response.json())
    .then(res => {
        dispatch({
            type: T.INIT_TODO,
            todolist: res
        });
    });
}

export const addTodo = (text) => {
    return dispatch => dispatch({
        type: T.ADD_TODO,
        text
    })
}

export const deleteTodo = (index) => {
    return dispatch => dispatch({
        type: T.DELETE_TODO,
        index
    })
}

export const inputChange = (inputText) => {
    return dispatch => dispatch({
        type: T.INPUT_CHANGE,
        inputText
    })
}
