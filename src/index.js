import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import todoApp from './reducers'
import { createStore } from 'redux'

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
