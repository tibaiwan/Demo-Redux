import { ADD_TODO, INIT_TODO, DELETE_TODO, INPUT_CHANGE } from '../actionTypes';

const defaultState = {
    inputText: '',
    todolist: []
}

export const reducerTodo = (state = defaultState, actions) => {
    switch (actions.type) {
        case INIT_TODO:
            return Object.assign({}, state, { todolist: actions.todolist });
        case ADD_TODO:
            return Object.assign({}, state, { todolist: state.todolist.concat(actions.text) });
        case DELETE_TODO:
            return Object.assign({}, state, { todolist: state.todolist.filter((item, index) => index !== actions.index) });
        case INPUT_CHANGE:
            return Object.assign({}, state, { inputText: actions.inputText });
        default:
            return state
    }
}
