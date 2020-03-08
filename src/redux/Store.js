import {sourcesReducer, expenseReducer} from '../redux/Reducer'
import {combineReducers, createStore} from 'redux'

const reducer = combineReducers({
    sources: sourcesReducer,
    expenses: expenseReducer
})

const store = createStore(reducer)

export {store}