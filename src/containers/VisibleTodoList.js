import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const mapStateToProps = (state, ownProps) => {
  return {
    todos: ownProps.getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: id => {
      dispatch({
        type:'TOGGLE_TODO',
        id
      })
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
