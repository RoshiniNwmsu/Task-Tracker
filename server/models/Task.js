// models/Task.js
const mongoose = require('mongoose');

// Define the task schema
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: { type: [String], required: true },  // Changed to an array of strings
  liveDemo: { type: String },
  githubLink: { type: String },
});

// Create the Task model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;  // Export the model