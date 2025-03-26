import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';  // Assuming TaskForm is your form component

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);  // Empty dependency array ensures it only runs once, when the component mounts

  // Function to add task to the list when successfully added
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);  // Add the new task to the state
  };

  return (
    <div>
      <TaskForm addTask={addTask} />  {/* Pass the addTask function to the TaskForm component */}
      <h3>Task Tracker Projects</h3>
      {tasks.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <p>{task.techStack.join(', ')}</p>
              <a href={task.liveDemo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={task.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;