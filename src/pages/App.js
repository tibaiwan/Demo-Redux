import React from 'react';
import { Input, Button, List } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetch from 'cross-fetch';
import { initTodo, addTodo, deleteTodo } from '../store/actions/todo';
import { inputChange } from '../store/actions/input';
import { API_getTodoList } from '../store/api';
import './app.css'

class TodoList extends React.Component {

  componentDidMount() {
    fetch(API_getTodoList).then(response => response.json()).then(res => {
      this.props.initTodo(res)
    });
  }

  handleClickAdd() {
    const { inputText } = this.props;
    if (!inputText.trim()) return
    this.props.addTodo(inputText);
    this.props.inputChange('');
  }

  handleInput(e) {
    this.props.inputChange(e.target.value);
  }

  render() {
    return (
      <div className="container">

        <div className="header">
          <Input placeholder="Input todo" value={this.props.inputText} allowClear onChange={this.handleInput.bind(this)} />
          <Button type="primary" onClick={this.handleClickAdd.bind(this)}>Add</Button>
        </div>
  
        <div className="body">
          <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            loading={this.props.isLoading}
            dataSource={this.props.todolist}
            renderItem={(item, index) => (
              <List.Item
                actions={[<div key="delete" onClick={() => this.props.deleteTodo(index)}>delete</div>]}
              >
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }
}

// 映射store.getState()的数据到 APP 组件
const mapStateToProps = state => ({
  todolist: state.todo.todolist,
  isLoading: state.todo.isLoading,
  inputText: state.input.inputText
});

// 映射使用了store.dispatch的函数到 APP 组件
// 方法一
const mapDispatchToPropsV1 = dispatch => ({
  initTodo: todolist => dispatch(initTodo(todolist)),
  addTodo: text => dispatch(addTodo(text)),
  deleteTodo: index => dispatch(deleteTodo(index)),
  inputChange: inputText => dispatch(inputChange(inputText))
});

// 方法二
const mapDispatchToPropsV2 = dispatch => {
  return bindActionCreators({initTodo, addTodo, deleteTodo, inputChange}, dispatch);
};

// 方法三
const mapDispatchToPropsV3 = {
  initTodo, addTodo, deleteTodo, inputChange
};

console.log('mapDispatchToPropsV1', mapDispatchToPropsV1);
console.log('mapDispatchToPropsV2', mapDispatchToPropsV2);
console.log('mapDispatchToPropsV3', mapDispatchToPropsV3);

export default connect(mapStateToProps, mapDispatchToPropsV3)(TodoList);
