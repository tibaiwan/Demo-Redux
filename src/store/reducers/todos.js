import { handleActions } from 'redux-actions';
import * as T from '../actionTypes';

const defaultState = {
    isLoading: true,
    todolist: []
}

export const reducerTodo = handleActions(
    {
        [T.INIT_TODO]: (state, action) => ({
            todolist: action.payload, isLoading: false
        }),
        [T.ADD_TODO]: (state, action) => ({
            todolist: state.todolist.concat(action.payload)
        }),
        [T.DELETE_TODO]: (state, action) => ({
            todolist: state.todolist.filter((item, index) => index !== action.payload)
        })
    },
    defaultState
)
