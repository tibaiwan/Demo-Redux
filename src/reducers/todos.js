import { ADD_TODO, DELETE_TODO, INPUT_CHANGE } from '../constant/actionTypes';

const defaultState = {
    inputText: '',
    todolist: []
}

export const reducerTodo = (state = defaultState, actions) => {
    switch (actions.type) {
        case ADD_TODO:
            return {
                ...state,
                todolist: state.todolist.concat(actions.text)
            }
        case DELETE_TODO:
            return {
                ...state,
                todolist: state.todolist.filter((item, index) => index !== actions.index)
            }
        case INPUT_CHANGE:
            return {
                ...state,
                inputText: actions.inputText
            }
        default:
            return state
    }
}
