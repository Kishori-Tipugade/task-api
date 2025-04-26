const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./utils/errorHandler");

const app = express();

app.use(express.json());
app.use("/tasks", taskRoutes);
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
