// Require the express module
const express = require('express');

// Create an express application
const app = express();

// Set the port number
const PORT = 3000;

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Array to store tasks
let tasks = [];

// Define routes

// Route to the home page
app.get('/', (req, res) => {
  // Send a simple HTML response with a link to the tasks page
  res.send(`
    <html>
      <head>
        <title>Welcome to the To-Do List App!</title>
      </head>
      <body>
        <h1>Welcome to the To-Do List App!</h1>
        <p>Click <a href="/tasks">here</a> to view your tasks.</p>
      </body>
    </html>
  `);
});

// Route to display tasks
app.get('/tasks', (req, res) => {
  // Render the 'tasks' view (tasks.ejs) and pass the tasks array to it
  res.render('tasks', { tasks: tasks });
});

// Route to add a new task
app.post('/tasks', (req, res) => {
  // Extract the task from the request body
  const task = req.body.task;
  // Add the task to the tasks array
  tasks.push(task);
  // Redirect the user back to the tasks page
  res.redirect('/tasks');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Set EJS as the view engine
app.set('view engine', 'ejs');
