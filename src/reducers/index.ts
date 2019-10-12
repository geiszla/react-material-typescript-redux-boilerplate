import { combineReducers } from 'redux';

import { Todo } from '../model/model';
import authenticationReducers from './authentication';
import todoReducers from './todo';

export default () => combineReducers({ ...todoReducers, ...authenticationReducers });

export interface RootState { todoList: Todo[], email: string }
