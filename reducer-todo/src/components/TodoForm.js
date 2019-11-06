import React from 'react'

const TodoForm = props => {
    return(
        <form>
            <input
                onChange={props.handler}
                type='text'
                name='todo'
                value={props.newTodo}
                placeholder='...add a task'
            />
            <button onClick={e => {
                e.preventDefault();
                props.dispatch( { type: 'AddTodo', payload: props.newTodo })
            }}>Add Task</button>
            <button onClick={e => {
                e.preventDefault();
                props.dispatch({ type: 'ClearTodo', payload: props.newTodo })
            }}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;