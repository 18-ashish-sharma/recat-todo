import React from 'react';

function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.isComplete}
          onChange={toggleComplete}
        />
        <span className="checkmark"></span>
        <span className="task-text">
          {todo.text}
        </span>
        <span className="mark-as-done-label">Mark as Done</span>
      </label>
      <button onClick={removeTodo}>Remove</button>
    </li>
  );
}

export default TodoItem;
