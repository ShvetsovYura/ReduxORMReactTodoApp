const appInitState={
    filter:'',
    loading:false
};

export const appReducer =(state=appInitState,action)=>{
    switch(action.type){
        case "FILTER_CHANGE":
            return {...state,filter:action.payload}
        case "LOADING_STATE_CHANGE":
            return {...state,loading:action.payload}
        default: return state
    }
}