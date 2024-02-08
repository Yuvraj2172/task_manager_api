const Task = require("../models/task");
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ message: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    console.log(taskID);
    if (!task) {
      return res.status(404).json({ message: `No task with id ${taskID}` });
    }
    res.status(200).json({ task });
    // res.status(200).json({ task: null, status: "success" });
  } catch (err) {
    res.status(500).json({ err });
  }
  // res.send("delete single task");
};
const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res
        .status(404)
        .json({ message: `Could not find task with the id ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const deleteAllTask = async (req, res) => {
  try {
    const task = await Task.deleteMany({});
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ err });
  }
};
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  deleteAllTask,
};
