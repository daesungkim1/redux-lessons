import React, { Component } from 'react';

let nextTodoId = 0

export default class TodoApp extends Component {
  render() {
    const { store, todos } = this.props
    return (
      <div>
        <input ref={node => {this.input = node}} />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++
          });
          this.input.value = ''
        }}>
        Add Todo
        </button>
        <ul>
          {todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    )
  }
}