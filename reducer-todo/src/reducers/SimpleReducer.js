export const InitialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Learn about node',
        completed: false,
        id: 3892987590
    },
    {
        item: 'Learn about python',
        completed: false,
        id: 3892987591
    },
    {
        item: 'Learn about redux',
        completed: false,
        id: 3892987592
    }
]

export const Reducer = (state, action) => {
    switch(action.type) {
        case "AddTodo":
            return [ ...state, { item: action.payload, completed: false, id: Date.now() } ];
        case "Toggle":
            let toggleCompleted = state.map( todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
            return toggleCompleted;
        case "ClearTodo":
            let clearCompleted = state.filter(todo => {
                if(todo.completed === true) {
                    return !todo.completed;
                } else {
                    return todo;
                }
            });
            return clearCompleted;
        default:
            return state;
        
    }
}