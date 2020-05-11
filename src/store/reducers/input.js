import { handleAction } from 'redux-actions';
import * as T from '../actionTypes';

export const reducerInput = handleAction(
    T.INPUT_CHANGE,
    (state, action) => ({
        inputText: action.payload
    }),
    { inputText: '' }
)
