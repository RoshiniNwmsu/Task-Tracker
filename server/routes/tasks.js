const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Create Task
router.post('/', async (req, res) => {
  try {
    console.log('Request Body:', req.body);  // Log the incoming request body for debugging
    
    const { title, description, techStack, liveDemo, githubLink } = req.body;

    // Validate that all required fields are present
    if (!title || !description || !techStack || !liveDemo || !githubLink) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate and format techStack as an array
    const techStackArray = techStack.split(',').map((item) => item.trim());

    const newTask = new Task({
      title,
      description,
      techStack: techStackArray,  // Ensure techStack is an array
      liveDemo,
      githubLink,
    });

    // Save the task to the database
    await newTask.save();
    res.status(201).json(newTask);  // Return the created task in the response
  } catch (err) {
    console.error('Error creating task:', err);  // Log the error in the backend
    res.status(500).json({ message: 'Error creating task', error: err.message });  // Return a more detailed error message
  }
});

// Get All Tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);  // Return all tasks in the response
  } catch (err) {
    console.error('Error fetching tasks:', err);  // Log the error in the backend
    res.status(500).json({ message: 'Error fetching tasks', error: err.message });  // Return a more detailed error message
  }
});

module.exports = router;