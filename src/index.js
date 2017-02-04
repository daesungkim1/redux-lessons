import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import todoApp, { getVisibleTodos } from './reducers'
import { createStore } from 'redux'

const store = createStore(todoApp);

const render = () => {
ReactDOM.render(
  <TodoApp
    store={store}
    getVisibleTodos={getVisibleTodos}  
    {...store.getState()} />,
  document.getElementById('root')
);
}

store.subscribe(render);
render()
