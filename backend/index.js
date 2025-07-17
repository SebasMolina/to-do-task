const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, text: "Grocery Shopping", completed: false },
  { id: 2, text: "Book Doctor's Appointment", completed: false },
  { id: 3, text: "Pay Bills", completed: false },
  { id: 4, text: "Finish Project Report", completed: false },
  { id: 5, text: "Call Mom", completed: false },
  { id: 6, text: "Plan Weekend Trip", completed: false },
  { id: 7, text: "Exercise", completed: false },
  { id: 8, text: "Read a Book", completed: false },
  { id: 9, text: "Learn a New Skill", completed: false },
  { id: 10, text: "Meditate", completed: false }
];

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post('/tasks', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text is required' });
  const newTask = { id: Date.now(), text, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Toggle task completion
app.patch('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  task.completed = !task.completed;
  res.json(task);
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });
  tasks.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
