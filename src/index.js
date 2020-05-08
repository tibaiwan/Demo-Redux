import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './pages/App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducerTodo } from './store/reducers/todos';
import thunk from 'redux-thunk';

const store = createStore(reducerTodo, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
