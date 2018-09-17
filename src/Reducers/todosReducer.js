import _ from 'lodash';


const initialState={
    filter:'',
    loading:false,
    items:[]
};
/*export const todosreducer = (state=initialState,action)=>{
    switch (action.type) {
        case ACTION_TYPES.ADD_TODO:return addTodo(state,action);
        case ACTION_TYPES.CLICK_ON_TODO: return toggleTodo(state,action);
        case ACTION_TYPES.REMOVE_READY_TODOS:return removeReadyTodos(state,action);
        case ACTION_TYPES.SUCCESS_FETCHED_TODOS:return fetchedTodos(state,action);
        case ACTION_TYPES.START_FETCHED_TODOS:return startFetchTodos(state,action);
        case ACTION_TYPES.SET_FILTER_TEXT:return setFilterText(state,action);
        default: return currentState(state,action);
    }
}*/

/*export const todosreducer = (dbState,action)=>{
    const session = orm.session(dbState);
    const {TodoModel} = session;
    
}*/

///Action hadlers
const addTodo=(state,action)=>{
    return {...state,
        items:[...state.items,{
            id:(state.items.length>0)?_.last(state.items).id+1:1,
            ready:false,
            task:action.payload,
            authorId:2 
        }]
    };
}

const toggleTodo=(state,action)=>{
    return {...state,items:state.items.map(todo=>
            (todo.id===action.payload)?{...todo,ready:!todo.ready}:todo
        )
    };
}

const removeReadyTodos=(state,action)=>{
    return {...state,items:state.items.filter(x=>x.ready!==true)};
}

const fetchedTodos=(state,action)=>{
    return {...state,items:action.payload,loading:false};
}

const startFetchTodos = (state,actin)=>{
    return {...state,loading:true};
}

const currentState=(state=initialState)=>{
    return state;
}

const setFilterText=(state,action)=>{
    return {...state,filter:action.payload};
};



///Selectors
 const getAllTodos = (dbState)=>{
  //return (state.filter)?
  //       _.filter(state.items,(todo)=>todo.task.includes(state.filter)): state.items;
}
 const getReadyCountTodos=(ormState)=>{
   /* let ormSession = orm.session(ormState);
    let {TodoModel} = ormSession;
    TodoModel.create({
        id:100,
        task:'modeltodo',
        ready:false
    });
    console.log(TodoModel.withId(100).task,ormSession);*/
    /*let readyCollection = _.filter(state.items,(todo)=>{
        return todo.ready===true;
    });
    return (readyCollection.length>0)?true:false;*/
}

 const getFilteredRecords=(state,findtext)=>{
    return 
}

 const getIsLoading=(state)=>{
    //return state.loading;
}

///export default todosreducer;