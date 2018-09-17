import React,{PureComponent} from 'react';
import {bindActionCreators} from 'redux';
import TodoItems from '../Containers/todo';
import {connect} from 'react-redux';
import * as TodosActionCreators from '../Actions/TodosActions'
import {Button,Input, Icon} from 'semantic-ui-react';
import {todosList,readyCount} from '../Selectors/TodosSelectors';
import * as FilterActionCreators from '../Actions/FilterAction';
import {loadingStatus} from '../Selectors/AppSelectors';

const mapStateToProps =(state)=>{
  return {
        todoslist:todosList(state),
        ready:readyCount(state),
        loading:loadingStatus(state)
    }
}

class TodoList extends PureComponent {
    constructor(props){
        super(props);
        const {dispatch} = props;
        this.state={
            newTaskName:'',
        }
        this.todoBoundActionCreator = bindActionCreators(
            TodosActionCreators
            ,dispatch);
        this.filterBoundActionCreator = bindActionCreators(FilterActionCreators,dispatch);
    };
    componentDidMount=()=>{
        console.log(this.todoBoundActionCreator,this.filterBoundActionCreator);
        this.todoBoundActionCreator.FetchTodos();
    };
   onNewTaskNameInputChange=(e)=>{
        this.setState({newTaskName:e.target.value});
   };
   onFilterChange=(e)=>{
        this.filterBoundActionCreator.changeFilter(e.target.value);
   };
   onNewTaskCreateClick = (state)=>{
        this.todoBoundActionCreator.AddTodo(this.state.newTaskName);
        this.setState({newTaskName:''});
   };
   onFilterClick = state=>{
    
   };

    render(){
        return(
            <div>
                <Input onChange={this.onFilterChange} placeholder='Фильтр...' icon="filter" />
                <TodoItems todos={this.props.todoslist} loading={this.props.loading} {...this.todoBoundActionCreator}></TodoItems>
                <Input onChange={this.onNewTaskNameInputChange} 
                    placeholder="Ведите имя новой задачи" value={this.state.newTaskName} icon={<Icon name="close"></Icon>}></Input>
                <Button onClick={this.onNewTaskCreateClick} size="tiny">Добавить задачу</Button>
                <Button onClick={()=>this.todoBoundActionCreator.RemoveReady()} size="tiny" disabled={this.props.ready} >
                    Удалить выполненные
                </Button>
                <Button onClick={()=>this.todoBoundActionCreator.FetchTodos()} size="tiny">Получить с сервера</Button>
                
            </div>
        )
    };
        
};
export default connect(mapStateToProps)(TodoList);;
