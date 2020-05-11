import React from 'react';
import { Input, Button, List } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetch from 'cross-fetch';
import { initTodo, addTodo, deleteTodo, inputChange } from '../store/actions/todo';
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

const mapStateToProps = state => ({
  todolist: state.todolist,
  inputText: state.inputText
});

/*
const mapDispatchToProps = dispatch => ({
  initTodo: todolist => dispatch(initTodo(todolist)),
  addTodo: text => dispatch(addTodo(text)),
  deleteTodo: index => dispatch(deleteTodo(index)),
  inputChange: inputText => dispatch(inputChange(inputText))
});
*/

// 简写版，功能同上
const mapDispatchToProps = dispatch => {
  return bindActionCreators({initTodo, addTodo, deleteTodo, inputChange}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
