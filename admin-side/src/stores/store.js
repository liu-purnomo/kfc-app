import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import userLoginReducer from "../reducers/userLoginReducer"
import categoriesGetReducer from "../reducers/categoriesGetReducer"
import itemsGetReducer from "../reducers/itemsGetReducer"
import itemsPostReducer from "../reducers/itemsPostReducer"
import itemsDeleteReducer from "../reducers/itemsDeleteReducer"
import userPostReducer from "../reducers/userPostReducer"
import categoriesPostReducer from "../reducers/categoriesPostReducer"
import itemsEditReducer from "../reducers/itemsEditReducer"
import itemsDetailReducer from "../reducers/itemsDetailReducer"
import userGetReducer from "../reducers/usersGetReducer"
import categoryDeleteReducer from "../reducers/categoryDeleteReducer"
import { categoryGetDetailReducer } from "../reducers/categoryGetDetailReducer"
import { categoryeditReducer } from "../reducers/categoryEditReducer"


const rootReducers = combineReducers({
    user: userLoginReducer,
    userPost: userPostReducer,
    userGet: userGetReducer,
    categoryDelete: categoryDeleteReducer,
    categories: categoriesGetReducer,
    categoryPost: categoriesPostReducer,
    items: itemsGetReducer,
    itemEdit: itemsEditReducer,
    itemDetail: itemsDetailReducer,
    postItem: itemsPostReducer,
    deleteItem: itemsDeleteReducer,
    categoryDetail: categoryGetDetailReducer,
    categoryEdit: categoryeditReducer
})

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))
const store = createStore(rootReducers, applyMiddleware(thunk))


export default store