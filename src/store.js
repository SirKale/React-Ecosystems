import { createStore, combineReducers } from 'redux';
import { todos } from './todos/reducers';

const rootReducer = combineReducers({
    todos,
});

export const configureStore = () => createStore(rootReducer);
