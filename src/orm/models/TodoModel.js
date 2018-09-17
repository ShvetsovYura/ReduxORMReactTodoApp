import {attr,Model} from 'redux-orm';
import * as TODO_ACTION_TYPES from '../../Constants/action-types';

class TodoModel extends Model{
    toString(){
        return `Todo: ${this.task}`;
    }

    static reducer(action,Todo,session){
        const {payload,type} = action;
        switch (type) {
            case TODO_ACTION_TYPES.ADD_TODO:
                let id=0;
                if(session.TodoModel.count()>0) {
                    id=session.TodoModel.last().id+1;
                }else{
                    id=1;
                }
                Todo.create({
                    id:id,
                    task:payload,
                    ready:false
                });
                break;
            case TODO_ACTION_TYPES.CLICK_ON_TODO:
                session.TodoModel.withId(payload).update({ready:!session.TodoModel.withId(payload).ready});
            break;
            case TODO_ACTION_TYPES.REMOVE_READY_TODOS:
                session.TodoModel.filter(x=>x.ready===true).delete();
            break; 
            case TODO_ACTION_TYPES.START_FETCHED_TODOS:
                break;
            case TODO_ACTION_TYPES.SUCCESS_FETCHED_TODOS:
                session.TodoModel.all().delete();
                payload.map(item=>{
                    session.TodoModel.create(item);
                    return null;
                });
                break;
            
            default: break;
        }

    }
}

TodoModel.modelName = 'TodoModel';

TodoModel.fields={
    id:attr(),
    task:attr(),
    ready:attr()
}


export default TodoModel;