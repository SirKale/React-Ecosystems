import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm'; 
import { completedTodo } from "./actions";
import { loadTodos, removeTodoRequest, completedTodoRequest } from "./thunks";
import './TodoList.css'
import { isLoading } from "./reducers";

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, [])
    
    const loadingMessage = <div>Loading todos...</div>;
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => (
                <TodoListItem 
                    key={todo.text} // Ensure a unique key is provided
                    todo={todo} 
                    onRemovePressed={onRemovePressed} 
                    onCompletedPressed={onCompletedPressed}
                />
            ))}
        </div>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)), // This should be defined
    onCompletedPressed: id => dispatch(completedTodoRequest(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
