import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import todoApp from './reducers'
import { createStore} from 'redux'

const store = createStore(todoApp);

const render = () => {
ReactDOM.render(
  <TodoApp
    store={store}
    todos={store.getState().todos} />,
  document.getElementById('root')
);
}

store.subscribe(render);
render()
