import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'
import 'antd/dist/antd.css';

import App from './pages/App';
import { reducerTodo } from './store/reducers/todos';

const logger = createLogger();
const store = createStore(reducerTodo, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
