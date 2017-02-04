import React from 'react'
import AddTodo from './AddTodo'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoApp = ({
  getVisibleTodos,
  store
}) => (
  <div>
    <AddTodo
      store={store}
    />
    <VisibleTodoList
      getVisibleTodos={getVisibleTodos}
      store={store}
    />
    <Footer
      store={store}
    />
  </div>
)

export default TodoApp
