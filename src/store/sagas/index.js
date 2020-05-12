import { call, put, fork, take, takeEvery, all } from 'redux-saga/effects';
import * as T from '../actionTypes';
import * as todoActions from '../actions/todo';
import { API } from '../services';

// 处理
export function* initTodoAsync() {
    const todolist = yield call(API.initTodo);
    yield put(todoActions.initTodo(todolist));
}

// 监听
export function* watchInitTodoAsync() {
    yield takeEvery(T.FETCH_TODO, initTodoAsync);
}

// 监听 方法二
export function* watchInitTodoAsyncV2() {
    while(true) {
        yield take(T.FETCH_TODO);
        yield call(initTodoAsync);
    }
}

// 执行监听
export default function* rootSaga() {
    yield all([fork(watchInitTodoAsync)]);
}
