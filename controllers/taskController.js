let tasks = [];
let currentId = 1;

exports.getAllTasks = (req, res) => {
  res.status(200).json(tasks);
};

exports.getTaskById = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(200).json(task);
};

exports.createTask = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required" });
  }

  const newTask = { id: currentId++, title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description } = req.body;

  const taskIndex = tasks.findIndex((t) => t.id === id);
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required" });
  }

  tasks[taskIndex] = { id, title, description };
  res.status(200).json(tasks[taskIndex]);
};

exports.deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  const deletedTask = tasks.splice(taskIndex, 1);
  res.status(200).json(deletedTask[0]);
};
