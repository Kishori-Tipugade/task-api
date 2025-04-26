 1. Project Title and Introduction :-
 **Project Title:** Task Manager RESTful API

This project is a backend service developed to manage task records. 
It demonstrates the use of RESTful API principles and CRUD operations using Node.js and Express.js.

2. Objective :-
The objective of this project is to design and implement a backend system that supports basic task management features such as:
- Creating a task
- Reading (fetching) tasks
- Updating existing tasks
- Deleting tasks

3. System Architecture :-
The system consists of:
- A REST API built using Express.js
- API testing and validation using Postman
- File-based JSON storage in-memory

4. Implementation Details :-
- Each route corresponds to a specific CRUD operation.
- All data is handled in JSON format.
- API supports route parameters and request body parsing.
- Error handling is implemented for invalid IDs or missing fields.

5. API Documentation :-

| Method | Endpoint           | Description            |
|--------|--------------------|------------------------|
| GET    | /tasks             | Get all tasks          |
| GET    | /tasks/:id         | Get a task by ID       |
| POST   | /tasks             | Create a new task      |
| PUT    | /tasks/:id         | Update a task by ID    |
| DELETE | /tasks/:id         | Delete a task by ID    |

6. Screenshots :-
## Postman: GET Request

![Get Task](./screenshots/GET.png)

---

## Postman: POST Request

![Task Posted Successfully](./screenshots/POST.png)

---

## Postman: PUT Request

![Task Updated Successfully](./screenshots/PUT.png)

---

## Postman: DELETE Request

![Task Deleted Successfully](./screenshots/DELETE.png)

---

## Postman: After deleting, we get empty array

![Task Updated Successfully](./screenshots/emptyArray.png)

---

## VS Code: Terminal Running API

![VS Code Terminal](./screenshots/serverRunning.png)



7. Conclusion :-
This project helped in understanding the fundamentals of REST architecture and how to implement a backend using Node.js and Express. It also demonstrated real-world testing using Postman.

