import React from 'react';
import {List,Checkbox, Loader, Dimmer} from 'semantic-ui-react';

const TodoItems =(props)=>{
    const {todos,loading} = props;
    //let loading = false;
    return(
        <List>
         {
             loading? 
                <Dimmer active><Loader size="massive"></Loader></Dimmer> :
                todos.map(el=>{
                    return <List.Item key={el.id} onClick={()=>props.ClickTodo(el.id)}>
                            <Checkbox checked={el.ready} label={el.task }></Checkbox>
                        </List.Item>
                })
         }
        </List>
        
    )
}

export default TodoItems;