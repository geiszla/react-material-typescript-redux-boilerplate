import { combineReducers } from 'redux';

import { Todo } from '../model/model';
import todoReducers from './todo';

export default () => combineReducers({ ...todoReducers });

export interface RootState { todoList: Todo[] }
