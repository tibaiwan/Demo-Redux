import React from 'react';
import { Input, Button, List } from 'antd';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, inputChange } from '../actions/todo';
import './app.css'

const TodoList = ({ todolist, inputText, addTodo, deleteTodo, inputChange }) => {


  const handleClickAdd = () => {
    if (!inputText.trim()) return
    addTodo(inputText);
    inputChange('')
  }

  const handleInput = (e) => {
    inputChange(e.target.value)
  }

  return (
    <div className="container">

      <div className="header">
        <Input placeholder="Input todo" value={inputText} allowClear onChange={handleInput} />
        <Button type="primary" onClick={handleClickAdd}>Primary</Button>
      </div>

      <div className="body">
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={todolist}
          renderItem={(item, index) => (
            <List.Item
              actions={[<div key="delete" onClick={() => deleteTodo(index)}>delete</div>]}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ todolist: state.todolist, inputText: state.inputText });
const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
  deleteTodo: index => dispatch(deleteTodo(index)),
  inputChange: inputText => dispatch(inputChange(inputText))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
