import React from 'react';
import { Input, Button, List } from 'antd';
import { connect } from 'react-redux';
import { addTodo, initTodo, deleteTodo, inputChange } from '../store/actions/todo';
import './app.css'

class TodoList extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(initTodo());
  }

  handleClickAdd() {
    const { inputText, dispatch } = this.props;
    if (!inputText.trim()) return
    dispatch(addTodo(inputText));
    dispatch(inputChange(''));
  }

  handleInput(e) {
    const { dispatch } = this.props;
    dispatch(inputChange(e.target.value));
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
                actions={[<div key="delete" onClick={() => this.props.dispatch(deleteTodo(index))}>delete</div>]}
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

export default connect(state => ({...state}))(TodoList);
