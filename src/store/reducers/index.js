import { combineReducers } from 'redux';
import { reducerInput } from './input';
import { reducerTodo } from './todos';

export const reducer = combineReducers({
    input: reducerInput,
    todo: reducerTodo,
})
