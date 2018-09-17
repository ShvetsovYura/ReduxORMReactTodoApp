import {createSelector} from 'redux-orm';
import orm from '../orm/orm';


const dbStateSelector = state =>  {
    return state.todosorm;    
}
const appSelector = state=>{
    return state.appstate
}

export const todosList = createSelector(
    orm,
    [dbStateSelector,appSelector],
    (session,appstate)=>{
        return appstate.filter?session.TodoModel.filter(x=>x.task.toLowerCase().includes(appstate.filter.toLowerCase())).toModelArray(): session.TodoModel.all().toModelArray();
    }
);

export const readyCount = createSelector(
    orm,dbStateSelector,session=>{
        return session.TodoModel.filter(x=>x.ready===true).count()>0?false:true;
    }
);



