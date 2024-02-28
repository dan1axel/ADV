import React from 'react';
import { useState } from "react";
import { useTodoList } from "../context/TodoContext";
import '../components/TodoList.css';

function TodoList() {

  const { todos, setTodos } = useTodoList();
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [editedText, setEditedText] = useState('');
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteTodoId, setDeleteTodoId] = useState(null);

  const handleAddTodo = () => {
    if (newTodo.length) {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };

  const onDelete = (id) => {
    setDeleteTodoId(id);
    setShowDeleteConfirmation(true);
  };

  const handleDeleteConfirm = (confirmed) => {
    if (confirmed) {
      setTodos(todos.filter((todo) => todo.id !== deleteTodoId));
    }
    setShowDeleteConfirmation(false);
    setDeleteTodoId(null);
  };

  const onEdit = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditingTodo(todoToEdit);
    setEditedText(todoToEdit.text);
  };

  const onUpdate = () => {
    if (editingTodo && editedText.length) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editingTodo.id ? { ...todo, text: editedText } : todo
        )
      );
      setEditingTodo(null);
      setEditedText('');
    }
  };

  const complete = (id) => {
    setTodos((prev) => {
      return prev.map((todo) =>
        todo.id === id ? { ...todo, complete: true } : todo
      );
    });
  };

  const todoList = () => {
    return todos.filter((todo) => !todo?.complete);
  };

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo} className="add-button">
          Add Todo
        </button>
      </div>
      <ul>
        {todoList().map((todo) => (
          <li key={todo.id}>
            <div className="todo-list-item">
              {editingTodo && editingTodo.id === todo.id ? (
                <div className='edit-container'>
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                  <button className='edit-buttons' onClick={() => onUpdate()}>
                    Save
                  </button>
                </div>
              ) : (
                <div className="todo-text">{todo.text}</div>
              )}
              <div className="todo-buttons">
                {editingTodo && editingTodo.id === todo.id ? null : (
                  <>
                    <button onClick={() => onEdit(todo.id)}>Edit</button>
                    <button onClick={() => onDelete(todo.id)}>Delete</button>
                    <button onClick={() => complete(todo.id)}>Complete</button>
                  </>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      {showDeleteConfirmation && (
        <div className="modal-container">
          <div className="delete-confirmation-modal">
            <p>Are you sure to delete?</p>
            <div className="delete-buttons">
              <button onClick={() => handleDeleteConfirm(true)}>Yes</button>
              <button onClick={() => handleDeleteConfirm(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoList;