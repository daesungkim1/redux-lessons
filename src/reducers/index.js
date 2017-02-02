import { combineReducres } from 'redux'
import { createStore} from 'redux'

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        // it calls other reducer
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => todo (t, action))
    default:
      return state
  }
}

// add visibilityFilter reducer
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const combineReducres = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        )
        return nextState;
      },
      {}
    )
  }
}

// rootReducer
const todoApp = combineReducres({
  todos: todos,
  visibilityFilter
})

const store = createStore(todoApp);
