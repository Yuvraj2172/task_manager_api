const express = require("express");
const app = express();
const PORT = 3000;
const tasks = require("./routes/tasks");
const connectDb = require("./db/connect");
require("dotenv").config();
// const connectDb  = require('./db/connect');
// connectDb()

//middleware
app.use(express.json());
app.use(express.static("./public"));
//routes
app.use("/api/v1/tasks", tasks);

// app.get('/api/v1/tasks'); get all the tasks
// app.post('/api/v1/tasks'); create a new task
// app.get('/api/v1/tasks:id'); get single task
// app.patch('/api/v1/tasks:id'); update task
// app.delete('/api/v1/tasks:id'); delete task

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
