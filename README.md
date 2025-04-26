<<<<<<< HEAD
# task-api
=======
Project Title :-
# Task Manager RESTful API

Description :-
A simple RESTful API built with Node.js and Express to manage tasks.  
It supports basic CRUD operations such as creating, retrieving, updating, and deleting tasks.

Technologies Used :-
- Node.js
- Express.js
- Postman (for testing)
- JSON (for storing task data)

How to Run the Project Locally :-
1. Clone the repository:
   https://github.com/Kishori-Tipugade/task-api.git

2. Navigate into the project directory:
   cd task-api

3. Install dependencies:
   npm install

4. Start the server:
   node index.js

5. Open Postman and test the following routes:

API Endpoints :-

| Method | Endpoint           | Description            |
|--------|--------------------|------------------------|
| GET    | /tasks             | Get all tasks          |
| GET    | /tasks/:id         | Get a task by ID       |
| POST   | /tasks             | Create a new task      |
| PUT    | /tasks/:id         | Update a task by ID    |
| DELETE | /tasks/:id         | Delete a task by ID    |


Sample Request Body (for POST/PUT) :-
{
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs"
}

Note :-
- This project does not use a database. All data is stored in memory.


>>>>>>> 1c84c9b (adding backend)
