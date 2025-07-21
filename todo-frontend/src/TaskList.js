import React from "react";

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <div id="task-list">
      {tasks.map(task => (
        <div key={task.id} className="task-card">
          <span className={`task-text${task.completed ? " line-through" : ""}`}>{task.text}</span>
          <div className="actions">
            <button
              onClick={() => deleteTask(task.id)}
              className="delete-btn"
              title="Eliminar"
              aria-label="Eliminar tarea"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L14 14M14 6L6 14" stroke="#dc2626" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
