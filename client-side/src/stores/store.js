import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { getItemReducer } from '../reducers/getItemReducer'
import { getItemDetailReducer } from '../reducers/getItemDetailReducer'

const rootReducers = combineReducers({
    getItem: getItemReducer,
    getItemDetail: getItemDetailReducer
})

const store = createStore(rootReducers, applyMiddleware(thunk))

export default store