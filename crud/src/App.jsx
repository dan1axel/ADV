import React, { useState } from 'react';
import './App.css';


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);


  const addTodo = () => {
    if (editingIndex !== null) {
      // Update existing todo
      const updatedTodos = [...todos];
      updatedTodos[editingIndex] = newTodo;
      setTodos(updatedTodos);
      setEditingIndex(null);
    } else {
      // Add new todo
      setTodos([...todos, newTodo]);
    }


    // Clear the input field
    setNewTodo('');
  };


  const editTodo = (index) => {
    setNewTodo(todos[index]);
    setEditingIndex(index);
  };


  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };


  return (
    <div>
    <h1>Todo List</h1>
      <ul>{todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <div>
              <button onClick={() => editTodo(index)}>Edit</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div style={{ textAlign: 'center', padding: '10px' }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={{ padding: '5px', marginRight: '5px' }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: '5px',
            background: '#4caf50',
            color: '#fff',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
          }}
        >
          {editingIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>
    </div>
  );
};


export default TodoList;
