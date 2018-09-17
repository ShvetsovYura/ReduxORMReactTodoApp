import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../Reducers/rootReducer';
import {logger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const middlewares = [logger,ReduxThunk];
const store = createStore(rootReducer,applyMiddleware(...middlewares));
export default store;