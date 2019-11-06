import React, { useState, useReducer } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { InitialState, Reducer } from './reducers/SimpleReducer'
import './App.css';

function App() {
  const [state, dispatch] = useReducer(Reducer, InitialState)
  const [newTodo, setNewTodo] = useState("");
  const handleChanges = e => {
    setNewTodo(e.target.value);
  }
  console.log(state);
  return (
    <div className="App">
      <h2>Todo List</h2>
      <TodoForm handler={handleChanges} newTodo={newTodo} dispatch={dispatch}/>
      <TodoList dispatch={dispatch} state={state}/>
    </div>
  );
}

export default App;