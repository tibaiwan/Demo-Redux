import { ADD_TODO, DELETE_TODO, INPUT_CHANGE } from '../constant/actionTypes';

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    }
}

export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        index
    }
}

export const inputChange = (inputText) => {
    return {
        type: INPUT_CHANGE,
        inputText
    }
}
