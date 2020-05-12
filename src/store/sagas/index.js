import { call, put, fork, takeEvery, all } from 'redux-saga/effects';
import * as T from '../actionTypes';
import * as todoActions from '../actions/todo';
import { API } from '../services/todo';

export function* initTodoAsync() {
    const todolist = yield call(API.initTodo);
    yield put(todoActions.initTodo(todolist));
}

export function* watchInitTodoAsync() {
    yield takeEvery(T.FETCH_TODO, initTodoAsync);
}

export default function* rootSaga() {
    yield all([fork(watchInitTodoAsync)]);
}
