import React, { Component } from 'react'
import TodoList from '../components/TodoList'

class VisibleTodoList extends Component {

  componentDidMount() {
    const store = this.props.store
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const props = this.props
    const state = this.props.store.getState()
    return (
      <TodoList
        todos={
          props.getVisibleTodos(
            state.todos,
            state.visibilityFilter
          )
        }
        onTodoClick={id=>
          props.store.dispatch({
            type:'TOGGLE_TODO',
            id
          })
        }
      />
    )
  }
}
export default VisibleTodoList
