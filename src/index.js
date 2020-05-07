import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './pages/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducerTodo } from './reducers/todos';

const store = createStore(reducerTodo);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
