Code Challenge for Senior Full Stack Engineer (SSr. Fullstack Engineer B)
Code Challenge
Challenge Title: Build a Mini Full-Stack Task Manager API with React Frontend
Description:



You are tasked with building a simple task manager application that allows users to create, view, update, and delete tasks. This challenge will test your ability to design and implement a full-stack solution using React for the frontend and Node.js for the backend, along with MongoDB for data persistence.

Requirements:
Backend (Node.js + Express + MongoDB):

Create a RESTful API with the following endpoints:

GET /tasks - Retrieve all tasks.

POST /tasks - Create a new task. A task should have at least a title (string) and a completed (boolean, default false).

PUT /tasks/:id - Update a task's title and/or completed status.

DELETE /tasks/:id - Delete a task by ID.

Use MongoDB (can be local or a free cloud instance like MongoDB Atlas) to store tasks.

Implement basic error handling and input validation.

Use async/await and proper asynchronous handling.




Frontend (React):

Build a simple React app that:

Displays the list of tasks fetched from the backend.

Allows adding a new task.

Allows toggling the completion status of a task.

Allows deleting a task.

Use React hooks (useState, useEffect) for state management.

The UI should be responsive and user-friendly but does not need to be styled extensively.




Constraints:
The entire challenge should be solvable within 30 minutes.

Focus on clean, maintainable code and best practices.

No authentication is required.

You may use any public npm packages but keep dependencies minimal.

Technologies Relevant to the Challenge
JavaScript (ES6+)

React (Functional Components, Hooks)

Node.js with Express

MongoDB (NoSQL database)

RESTful API design

Async/Await for asynchronous programming

Git (for version control, if applicable)
