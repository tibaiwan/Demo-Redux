import fetch from 'cross-fetch';
import { createAction } from 'redux-actions';
import * as T from '../actionTypes';
import { API_getTodoList } from '../api';

export const initTodoAsync = () => {
    return (dispatch, getState) => {
        console.log('getState', getState());
        // get ...
        fetch(API_getTodoList).then(response => response.json())
        .then(res => {
            dispatch(createAction(T.INIT_TODO)(res));
        });
    }
}

export const addTodoAsync = (todo) => {
    return dispatch => {
        // post ...
        dispatch(createAction(T.ADD_TODO)(todo));
    }
}

export const deleteTodoAsync = (index) => {
    return dispatch => {
        // delete ...
        dispatch(createAction(T.DELETE_TODO)(index));
    }
}
