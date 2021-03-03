import allReducer from '../reducers'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

const store1 = createStore(allReducer,applyMiddleware(thunk))
export default store1