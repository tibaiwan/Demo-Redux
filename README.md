## 项目启动

```bash
yarn
yarn start # 不同分支需重新yarn
```

## 分支DEMO

redux-thunk DEMO: `feature/redux-thunk`  
redux-thunk + redux-actions DEMO: `feature/redux-actions`  
redux-saga DEMO: `feature/redux-saga`  

## 技术点总结

Redux 三个基本原则： 单一数据源、 State 只读、 使用纯函数来修改执行

Action 是把数据从应用传到 store 的有效载荷，它是 store 数据的唯一来源。一般通过 store.dispatch() 将 action 传到 store。

Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。

Store 就是把 Action、Reducers 联系到一起的对象。Store 有以下职责：

- 维持应用的 state；
- 提供 getState() 方法获取 state；
- 提供 dispatch(action) 方法更新 state；
- 通过 subscribe(listener) 注册监听器;
- 通过 subscribe(listener) 返回的函数注销监听器。

### redux

- `createStore(reducer, [preloadedState], enhancer)`
    创建一个 Redux store 来以存放应用中所有的 state。应用中应有且仅有一个 store。
- `applyMiddleware(...middleware)`
- `combineReducers(reducers)`
    combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数。
    由 combineReducers() 返回的 state 对象，会将传入的每个 reducer 返回的 state 按其传递给 combineReducers() 时对应的 key 进行命名。

    ```js
    rootReducer = combineReducers({potato: potatoReducer, tomato: tomatoReducer})
    ```

### react-redux

- `<Provider store>` 使组件层级中的 connect() 方法都能够获得 Redux store。
- `connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])` 连接 React 组件与 Redux store。

### SEE ALSO

- [redux EN](https://redux.js.org/)
