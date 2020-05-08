import fetch from 'cross-fetch';
import { ADD_TODO, DELETE_TODO, INPUT_CHANGE, INIT_TODO } from '../actionTypes';
import { API_getTodoList } from '../api';

export const initTodo = () => {
    return dispatch => fetch(API_getTodoList).then(response => response.json())
    .then(res => {
        console.log('initTodo res', res);
        dispatch({
            type: INIT_TODO,
            todolist: res
        });
    });
}

export const addTodo = (text) => {
    return dispatch => dispatch({
        type: ADD_TODO,
        text
    })
}

export const deleteTodo = (index) => {
    return dispatch => dispatch({
        type: DELETE_TODO,
        index
    })
}

export const inputChange = (inputText) => {
    return dispatch => dispatch({
        type: INPUT_CHANGE,
        inputText
    })
}
