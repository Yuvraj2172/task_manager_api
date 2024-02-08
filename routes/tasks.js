const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  deleteAllTask,
} = require("../controllers/tasks");
router.route("/").get(getAllTasks).post(createTask).delete(deleteAllTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
