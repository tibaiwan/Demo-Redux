## 技术点总结

### react-redux API

- `<Provider store>` 使组件层级中的 connect() 方法都能够获得 Redux store；
- `connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])` 连接 React 组件与 Redux store；

### mapDispatchToProps 三种写法

方法一：

```js
const mapDispatchToPropsV1 = dispatch => ({
  initTodo: todolist => dispatch(initTodo(todolist)),
  addTodo: text => dispatch(addTodo(text)),
  deleteTodo: index => dispatch(deleteTodo(index)),
  inputChange: inputText => dispatch(inputChange(inputText))
});
```

方法二：

```js
import { bindActionCreators } from 'redux';

const mapDispatchToPropsV2 = dispatch => {
  return bindActionCreators({initTodo, addTodo, deleteTodo, inputChange}, dispatch);
};
```

方法三：

```js
const mapDispatchToPropsV3 = {
  initTodo, addTodo, deleteTodo, inputChange
};
```
