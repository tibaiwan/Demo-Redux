## 项目启动

```bash
yarn
yarn start
```

## 技术点总结

### redux-thunk

让 store.dispatch 变成可以接收一个函数/一个对象的中间件。统一了异步和同步 action 的调用方式。

使用：

```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './store/reducers';

const store = createStore(reducer, applyMiddleware(thunk));
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