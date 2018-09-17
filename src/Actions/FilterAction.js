export const changeFilter=( value)=>{
    return{
        type:"FILTER_CHANGE",
        payload:value
    }
}

export const setLoadingStatus=(value)=>{
    return {
        type:'LOADING_STATE_CHANGE',
        payload:value
    }
}