import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const handleClick = (id) => dispatch({
    type: "DELETE_TODO",
    payload: id
  })
  if (!todos || !todos.length) {
    return <p>No Todos</p>
  }
  return (
    <ul>
      {todos.map(todo => <li onClick={() => {handleClick(todo.id)}}>{todo.label}</li>)}
    </ul>
  )
}

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();
  const handleChange = event => setNewTodo(event.target.value);
  const handleClick = () => dispatch({
    type: "ADD-TODO",
    payload: {
      label: newTodo,
      id: 1 + Math.random()
    }
  })
  return (<>
    <input value={newTodo} onChange={handleChange} type="text" />
    <button onClick={handleClick}>Add To Do</button>
  </>);
};

function App()  {
  return (
    <div>
      <h1>My Todo List</h1>
      <Todos />
      <TodoInput />
    </div>
  );
};

export default App;
