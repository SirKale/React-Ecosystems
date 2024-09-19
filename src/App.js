import React from 'react';
import { hot } from 'react-hot-loader';
import TodoList from './todos/TodoList';
import NewTodoForm from './todos/NewTodoForm'; // Import NewTodoForm
import './App.css';

const App = () => (
    <div className="App">
        <NewTodoForm /> 
        <TodoList />
    </div>
);

export default hot(module)(App);
