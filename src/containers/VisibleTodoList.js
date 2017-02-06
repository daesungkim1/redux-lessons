import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { toggleTodo } from '../actions'
import { getVisibleTodos } from '../reducers'
import TodoList from '../components/TodoList'
import { fetchTodos } from '../api';

// in order to implement lifecycle hooks,
// needs React class instead connect directly
class VisibleTodoList extends Component {
  componentDidMount() {
    fetchTodos(this.props.filter).then(todos =>
      console.log(this.props.filter, todos)
    )
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      // when it updated, fetchs again with corresponding filter data
      fetchTodos(this.props.filter).then(todos =>
        console.log(this.props.filter, todos)
      )
    }
  }

  render() {
    return <TodoList {...this.props}/>
  }
}

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all'
  return {
    todos: getVisibleTodos(state, filter || 'all'),
    filter
  }
}

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick : toggleTodo }
)(VisibleTodoList))

export default VisibleTodoList
