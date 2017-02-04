import { combineReducers } from 'redux'
import todos from './todos'

// rootReducer
const todoApp = combineReducers({
  todos
})

export default todoApp
