import React from "react";

function Home({ addTask, newTask, setNewTask }) {
  return (
    <div className="add-task-container">
      <p className="add-task-title">Agregar tarea</p>
      <div className="add-task-form">
        <input
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          type="text"
          placeholder="Nueva tarea..."
          className="add-task-input"
        />
        <button onClick={addTask} className="add-task-btn">+
          <span className="add-task-btn-text">Agregar</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
