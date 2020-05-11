import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import 'antd/dist/antd.css';

import App from './pages/App';
import { reducer } from './store/reducers';
const logger = createLogger();

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
