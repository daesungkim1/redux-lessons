import React from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'

let nextTodoId = 0

const TodoApp = ({
  todos,
  visibilityFilter,
  getVisibleTodos,
  store
}) => (
  <div>
    <AddTodo
      onAddClick={text =>
        store.dispatch({
          type: 'ADD_TODO',
          id: nextTodoId++,
          text
        })
      } />
    <TodoList
      todos={getVisibleTodos(todos, visibilityFilter)}
      onTodoClick={id =>
        store.dispatch({
          type: 'TOGGLE_TODO',
          id
        })
      } />
    <Footer
      store={store}
    />
  </div>
)

export default TodoApp
