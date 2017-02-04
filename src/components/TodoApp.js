import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

// params comes from react router
const TodoApp = ({ params }) => (
  <div>
    <AddTodo />
    <VisibleTodoList
      filter={params.filter || 'all'}/>
    <Footer
      currentFilter={params.filter || 'all'}/>
  </div>
)

export default TodoApp
