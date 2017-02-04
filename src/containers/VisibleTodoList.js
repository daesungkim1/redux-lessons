import React, { Component } from 'react'
import TodoList from '../components/TodoList'

class VisibleTodoList extends Component {

  componentDidMount() {
    const {store} = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const props = this.props
    const { store } = this.context
    const state = store.getState()
    return (
      <TodoList
        todos={
          props.getVisibleTodos(
            state.todos,
            state.visibilityFilter
          )
        }
        onTodoClick={id=>
          store.dispatch({
            type:'TOGGLE_TODO',
            id
          })
        }
      />
    )
  }
}

VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
}

export default VisibleTodoList
