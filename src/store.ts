import { createStore, applyMiddleware } from 'redux'
import { usersReducer } from './users/store/reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";


export default createStore(usersReducer, composeWithDevTools(applyMiddleware(thunk)))
