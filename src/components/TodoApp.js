import React from 'react'
import AddTodo from './AddTodo'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoApp = ({getVisibleTodos}) => (
  <div>
    <AddTodo />
    <VisibleTodoList
      getVisibleTodos={getVisibleTodos} />
    <Footer />
  </div>
)

export default TodoApp
