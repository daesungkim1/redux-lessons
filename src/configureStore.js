import { createStore } from 'redux'
import todoApp from './reducers'

// it's easy to write test case
const configureStore = () => {
  const store = createStore(todoApp)
  return store
}

export default configureStore