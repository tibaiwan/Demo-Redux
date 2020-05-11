import * as T from '../actionTypes';
import { createAction } from 'redux-actions';

// createAction 实现
// export const createAction = type => text => ({
//     type,
//     payload: text
// });

const inputChangeAction = createAction(T.INPUT_CHANGE);

export const inputChangeSync = (inputText) => {
    return dispatch => dispatch(inputChangeAction(inputText))
}
