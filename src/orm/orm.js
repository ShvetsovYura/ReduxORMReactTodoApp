import {ORM} from 'redux-orm';
import TodoModel from './models/TodoModel';

const orm = new ORM();
orm.register(TodoModel);

export default orm;