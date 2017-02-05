import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(t => t.completed);
    case 'active':
      return todos.filter(t => !t.completed);
    default:
      return new Error(`Unknown filter: ${filter}.`)
  }
}

const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(state.todos, params.filter || 'all')
})

// action which is dispatched by cb has same arguments.

// const mapDispatchToProps = (dispatch) => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id))
//   }
// })

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick : toggleTodo } // configuration object which corresponding actions
)(TodoList))

export default VisibleTodoList
