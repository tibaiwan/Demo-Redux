import * as T from '../actionTypes';

const defaultState = {
    inputText: '',
}

export const reducerInput = (state = defaultState, actions) => {
    switch (actions.type) {
        case T.INPUT_CHANGE:
            return { ...state, inputText: actions.inputText };
        default:
            return state
    }
}
