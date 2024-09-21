import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm'; 
import { getTodosLoading, getCompletedTodos, getIncompleteTodos } from "./selectors";
import { loadTodos, removeTodoRequest, completedTodoRequest } from "./thunks";

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;

const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, [])
    
    const loadingMessage = <div>Loading todos...</div>;
    const content = (
        <ListWrapper>
            <NewTodoForm />
            <h3>Incomplete:</h3>
            {incompleteTodos.map(todo => (
                <TodoListItem 
                    key={todo.text} // Ensure a unique key is provided
                    todo={todo} 
                    onRemovePressed={onRemovePressed} 
                    onCompletedPressed={onCompletedPressed}
                />
            ))}
            <h3>Completed:</h3>
            {completedTodos.map(todo => (
                <TodoListItem 
                    key={todo.text} // Ensure a unique key is provided
                    todo={todo} 
                    onRemovePressed={onRemovePressed} 
                    onCompletedPressed={onCompletedPressed}
                />
            ))}
        </ListWrapper>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)), // This should be defined
    onCompletedPressed: id => dispatch(completedTodoRequest(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
