import React from 'react'

const Todo = (props) => {
    console.log(props);
    return(
        <div
            style={props.todo.completed ? { textDecoration: 'line-through' } : null}
            onClick={() => {
                props.toggleCompleted({ type: "Toggle", payload: props.todo.id})
            }}
        >
            {props.todo.item}
        </div>
    );
};

export default Todo;