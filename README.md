## 技术点总结

### redux-thunk

让 store.dispatch 变成可以接收一个函数/一个对象的中间件。统一了异步和同步 action 的调用方式。

#### 使用

引入：

```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './store/reducers';

const store = createStore(reducer, applyMiddleware(thunk));
```

定义方法：

```js
export const initTodo = () => {
  return (dispatch, getState) => {
    console.log('getState', getState());
    fetch(API_getTodoList).then(response => response.json())
    .then(res => {
      dispatch({
        type: T.INIT_TODO,
        todolist: res
      });
    });
  }
}
```

调用方法：

```js
dispatch(initTodo());
```

源码：

```js
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```
