import { combineReducers } from 'redux';
import { reducerInput } from './input';
import { reducerTodo } from './todo';

export const reducer = combineReducers({
    input: reducerInput,
    todo: reducerTodo,
})
