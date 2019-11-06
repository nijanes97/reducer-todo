import React from 'react'

import Todo from './Todo'

const TodoList = props =>{
    return(
        <div>
            {props.state.map(todo => (
                
                <Todo
                    toggleCompleted={props.dispatch}
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </div>
    );
};

export default TodoList;