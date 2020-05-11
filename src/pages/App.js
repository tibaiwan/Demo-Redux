import React from 'react';
import { Input, Button, List } from 'antd';
import { connect } from 'react-redux';
import * as ACTION_TODO from '../store/actions/todo';
import * as ACTION_INPUT from '../store/actions/input';
import './app.css'

class TodoList extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(ACTION_TODO.initTodoAsync());
  }

  handleClickAdd() {
    const { inputText, dispatch } = this.props;
    if (!inputText.trim()) return
    dispatch(ACTION_TODO.addTodoAsync(inputText));
    dispatch(ACTION_INPUT.inputChangeSync(''));
  }

  handleInput(e) {
    const { dispatch } = this.props;
    dispatch(ACTION_INPUT.inputChangeSync(e.target.value));
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
                actions={[<div key="delete" onClick={() => this.props.dispatch(ACTION_TODO.deleteTodoAsync(index))}>delete</div>]}
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
  ...state.todo,
  ...state.input
})

export default connect(mapStateToProps)(TodoList);
