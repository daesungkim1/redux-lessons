import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import todoApp, { getVisibleTodos } from './reducers'
import { createStore } from 'redux'

class Provider extends Component {
  getChildContext() {
    return {
      store : this.props.store
    }
  }
  render() {
    return this.props.children
  }
}

Provider.childContextTypes = {
  store : React.PropTypes.object
};

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp
      getVisibleTodos={getVisibleTodos}
    />
  </Provider>,
  document.getElementById('root')
);
