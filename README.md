## 项目启动

```bash
yarn
yarn start
```

## 技术点总结

### react-actions

- createAction
    - createAction(type)
    - createAction(type, payloadCreator)
    - createAction(type, payloadCreator, metaCreator)
- createActions
    - createActions(actionMap[, options])
    - createActions(actionMap, ...identityActions[, options])
- handleAction
    - handleAction(type, reducer, defaultState)
    - handleAction(type, reducerMap, defaultState)
- handleActions
    - handleActions(reducerMap, defaultState[, options])
- combineActions
    - combineActions(...types)

### SEE ALSO

- [redux-actions](https://redux-actions.js.org/)
