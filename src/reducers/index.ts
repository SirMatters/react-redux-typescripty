import { combineReducers } from 'redux';
import { todos } from './todos';
import { Todo } from '../actions';

export interface StoreState {
  todos: Todo[];
}

const reducers = combineReducers<StoreState>({ todos });

export default reducers;
