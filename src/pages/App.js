import React from 'react';
import { Input, Button, List } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTodolist, initTodo, addTodo, deleteTodo } from '../store/actions/todo';
import { inputChange } from '../store/actions/input';
import './app.css'

class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodolist();
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

const mapStateToProps = state => ({
  todolist: state.todo.todolist,
  isLoading: state.todo.isLoading,
  inputText: state.input.inputText
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
  return bindActionCreators({fetchTodolist, initTodo, addTodo, deleteTodo, inputChange}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
