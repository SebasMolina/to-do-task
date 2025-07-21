import React, { useEffect, useState } from "react";
import './App.css';
import TaskList from "./TaskList";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate, Link } from "react-router-dom";

const API_URL = "http://localhost:3001/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const loadTasks = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async () => {
    if (!newTask.trim()) return;
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newTask })
    });
    setNewTask("");
    loadTasks();
  };

  const toggleTask = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "PATCH" });
    loadTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    loadTasks();
  };

  return (
    <Router>
      <div className="relative flex min-h-screen flex-col bg-[#111418] font-sans">
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between border-b border-[#283039] px-10 py-3">
            <div className="flex items-center gap-4">
              <Link to="/" className="logo-container" aria-label="Ir al inicio">
                <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="12" fill="#0b79ee"/>
                  <path d="M14 24L22 32L34 16" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            <h2 className="text-white text-lg font-bold text-center flex-1" style={{margin:0}}>TaskMaster</h2>
            <nav>
              <NavLink to="/tareas" className={({ isActive }) => isActive ? "active" : undefined}>Tareas</NavLink>
            </nav>
          </header>
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <Routes>
                <Route path="/" element={<Home addTask={addTask} newTask={newTask} setNewTask={setNewTask} />} />
                <Route path="/tareas" element={<TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
