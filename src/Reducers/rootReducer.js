import {combineReducers} from 'redux';
import {createReducer} from 'redux-orm';
import {appReducer} from './appReducer';
import orm from '../orm/orm';



const rootReducer=combineReducers({
    todosorm:createReducer(orm),
    appstate:appReducer
});

export default rootReducer;