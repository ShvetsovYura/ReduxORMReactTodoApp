import * as ACTION_TYPES from '../Constants/action-types';
import ApiService from '../Services/Api';
import {setLoadingStatus} from '../Actions/FilterAction';

export const GetTodosAction = ()=>{
    return {
        type:ACTION_TYPES.GET_TODOS_LIST,
        payload:null
    }
}

export const AddTodo = (newTaskName)=>{
    
    return {
        type:ACTION_TYPES.ADD_TODO,
        payload:newTaskName
    }
}

export const RemoveReady=()=>{
    return {
        type:ACTION_TYPES.REMOVE_READY_TODOS,
        payload:null
    }
}

export const SetFilterText=(text)=>{
    return {
        type:ACTION_TYPES.SET_FILTER_TEXT,
        payload:text
    }
};

export const ClickTodo = (todoId)=>{
   return {
        type:ACTION_TYPES.CLICK_ON_TODO,
        payload:todoId
    }
}

export const FetchTodos=()=>{
   
    return async (dispatch)=>{
        dispatch(setLoadingStatus(true));
        const data= await ApiService.getDefaultTodos();
        dispatch({
            type:ACTION_TYPES.SUCCESS_FETCHED_TODOS,
            payload:data
        });
        dispatch(setLoadingStatus(false));
    }
}
