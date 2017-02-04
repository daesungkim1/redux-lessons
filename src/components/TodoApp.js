import React, { Component } from 'react'
import FilterLink from './FilterLink'
import TodoList from './TodoList'

let nextTodoId = 0

export default class TodoApp extends Component {
  render() {
    const { todos, visibilityFilter, getVisibleTodos, store } = this.props
    const visibleTodos = getVisibleTodos(todos, visibilityFilter)
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
        <TodoList
          todos={visibleTodos}
          onTodoClick={id =>
            store.dispatch({
              type: 'TOGGLE_TODO',
              id
            })
          }/>
        <p>
          Show:
          {' '}
          <FilterLink
            filter='SHOW_ALL'
            currentFilter={visibilityFilter}
            store={store}>
            All
          </FilterLink>
          {' '}
          <FilterLink
            filter='SHOW_ACTIVE'
            currentFilter={visibilityFilter}
            store={store}>
            Active
          </FilterLink>
          {' '}
          <FilterLink
            filter='SHOW_COMPLETED'
            currentFilter={visibilityFilter}
            store={store}>
            Completed
          </FilterLink>
        </p>
      </div>
    )
  }
}