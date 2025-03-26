# Task Tracker

## Overview
The **Task Tracker** is a full-stack web application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This project allows users to track and manage tasks with essential details such as title, description, tech stack, live demo URL, and GitHub link. The app provides an interface to add and view tasks.

### What I Did:
- **Frontend Development**: Built the frontend using **React.js** to create a responsive and interactive UI. 
- **Backend Development**: Set up a **Node.js** server with **Express.js** to handle API requests. Implemented a RESTful API for task management.
- **Database Integration**: Integrated **MongoDB** to store task data, including title, description, tech stack, live demo URL, and GitHub link.
- **CRUD Operations**: Implemented create and read functionality for tasks. Tasks are displayed in a user-friendly list format.
- **State Management**: Managed state for tasks in the frontend using **React hooks** and updated the UI dynamically after adding a new task.
- **API Integration**: Used **Axios** to send requests to the backend and fetch or send data to the database.

## Features
- **Add tasks** with title, description, tech stack, live demo link, and GitHub repository link.
- **View tasks** in a list format with each task's details.
- **Responsive design**: The app is designed to be mobile-friendly, making it accessible on various screen sizes.
- **Backend**: Built using **Node.js**, **Express.js**, and **MongoDB** for storing tasks.
- **Frontend**: Built with **React.js** for dynamic and responsive user interfaces.
- **API**: RESTful API to manage tasks.
  
## Tech Stack
- **Frontend**: React.js, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Can be deployed on platforms like Heroku or AWS.

## Installation

### Prerequisites
Make sure you have the following installed:
- **Node.js** (with npm)
- **MongoDB** (or use MongoDB Atlas for a cloud-based database)

### Setup Instructions

1. Clone the repository:

    ```bash
    git clone https://github.com/RoshiniNwmsu/Task-Tracker.git
    cd Task-Tracker
    ```

2. Install dependencies for both backend and frontend:

    - **Backend**:

      ```bash
      cd server
      npm install
      ```

    - **Frontend**:

      ```bash
      cd client
      npm install
      ```

3. Create a `.env` file in the **server** folder and add your MongoDB URI and other configurations:

    ```bash
    MONGO_URI=your_mongodb_connection_string
    ```

4. Start both the backend and frontend servers:

    - **Backend**:

      ```bash
      cd server
      npm start
      ```

    - **Frontend**:

      ```bash
      cd client
      npm start
      ```

5. Open your browser and navigate to `http://localhost:3000` to view the Task Tracker app.

## Contributing
Feel free to fork the repository, submit issues, and contribute improvements. If you have any suggestions or bug fixes, please create a pull request.

