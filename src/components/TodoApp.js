import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
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
