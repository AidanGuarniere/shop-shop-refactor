import { createStore } from 'redux'
import { useProductReducer } from './reducers'

const store = createStore(useProductReducer)

export default store