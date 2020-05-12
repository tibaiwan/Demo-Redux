## 技术点总结

### redux-saga

- `redux-saga`
    - delay 延迟
- `redux-saga/effects`
    - all 类似promise.all
    - takeEvery 在发起（dispatch）到 Store 并且匹配 pattern 的每一个 action 上派生一个 saga。
    - put 创建一个 Effect 描述信息，用来命令 middleware 向 Store 发起一个 action。相当于dispatch 。
    - fork 创建一个 Effect 描述信息，用来命令 middleware 以 非阻塞调用 的形式执行 fn。
    - call 创建一个 Effect 描述信息，用来命令 middleware 以参数 args 调用函数 fn 。
    - take 创建一个 Effect 描述信息，用来命令 middleware 在 Store 上等待指定的 action。
    - select 创建一个 Effect 描述信息，用来命令 middleware 在当前 Store 的 state 上调用指定的选择器。

### SEE ALSO

- [redux saga](https://redux-saga.js.org/)
