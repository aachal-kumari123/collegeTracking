const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const {
  verifyToken,
  isTeacher,
  isAdmin,
} = require("../middleware/authMiddleware");

// Teacher
router.post("/", verifyToken, isTeacher, createTask);
router.put("/:id", verifyToken, isTeacher, updateTask);

// Admin
router.get("/", verifyToken, isAdmin, getTasks);
router.delete("/:id", verifyToken, isAdmin, deleteTask);

module.exports = router;