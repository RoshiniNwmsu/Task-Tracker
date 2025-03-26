import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    techStack: '',
    liveDemo: '',
    githubLink: '',
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const techStackArray = task.techStack.split(',').map((item) => item.trim());

    const newTask = {
      ...task,
      techStack: techStackArray,  // Make sure techStack is an array
    };

    try {
      const response = await axios.post('http://localhost:5001/api/tasks', newTask);

      if (response.status === 201) {
        alert('Task added successfully!');
        addTask(response.data);  // Call the addTask function to update the parent component
        setTask({
          title: '',
          description: '',
          techStack: '',
          liveDemo: '',
          githubLink: '',
        });
      } else {
        alert('Failed to add task');
      }
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Error adding task');
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Add a New Task</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="title">Task Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={task.title}
              onChange={handleChange}
              placeholder="Enter task title"
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="techStack">Tech Stack (comma separated)</label>
            <input
              type="text"
              name="techStack"
              className="form-control"
              value={task.techStack}
              onChange={handleChange}
              placeholder="Tech stack (e.g., React, Node.js)"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-12 mb-3">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              className="form-control"
              value={task.description}
              onChange={handleChange}
              placeholder="Enter task description"
              rows="4"
              required
            ></textarea>
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="liveDemo">Live Demo URL</label>
            <input
              type="text"
              name="liveDemo"
              className="form-control"
              value={task.liveDemo}
              onChange={handleChange}
              placeholder="Live Demo URL"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="githubLink">GitHub Link</label>
            <input
              type="text"
              name="githubLink"
              className="form-control"
              value={task.githubLink}
              onChange={handleChange}
              placeholder="GitHub Link"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary btn-block">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;