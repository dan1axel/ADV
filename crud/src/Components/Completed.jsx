import React from 'react';
import { useState } from "react";
import { useTodoList } from '../context/TodoContext';
import '../components/TodoList.css';

function Completed() {
  const { todos, setTodos } = useTodoList();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteTodoId, setDeleteTodoId] = useState(null);

  const todoList = () => {
    return todos.filter((todo) => todo?.complete);
  };

  const undoComplete = (id) => {
    setTodos((prev) => {
      return prev.map((todo) =>
        todo.id === id ? { ...todo, complete: false } : todo
      );
    });
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

  return (
    <div>
      <ul>
        {todoList().map((todo, i) => (
          <div className="complete-container" key={i}>
            <li>
              <div className='complete-2'>
                <div className='complete-text'>{todo.text}</div>
                <div className='complete-buttons'>  
                  <button onClick={() => undoComplete(todo.id)}>Undo</button>
                  <button onClick={() => onDelete(todo.id)}>Delete</button>
                </div>
              </div>
            </li>
          </div>
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

export default Completed;
