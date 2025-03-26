const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Task = require('./models/Task'); // Ensure the Task model is correctly imported
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());  // To parse JSON requests
app.use(cors());  // Allow cross-origin requests

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Define the POST route to add a task
app.post('/api/tasks', async (req, res) => {
  const { title, description, techStack, liveDemo, githubLink } = req.body;

  // Basic validation to ensure all fields are provided
  if (!title || !description || !techStack || !liveDemo || !githubLink) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create a new task and save it to the database
    const newTask = new Task({
      title,
      description,
      techStack,
      liveDemo,
      githubLink,
    });

    await newTask.save();

    // Return the created task with a success response
    res.status(201).json(newTask);
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({ message: 'Error adding task', error });
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});