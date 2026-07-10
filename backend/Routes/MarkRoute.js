const express = require("express");
const router = express.Router();

const {
  addMarks,
  getAllMarks,
  getStudentMarks,
  updateMarks,
  deleteMarks,
} = require("../controllers/markController");

const {
  verifyToken,
  isTeacher,
  isAdmin,
  isStudent,
} = require("../middleware/authMiddleware");

// Teacher
router.post("/", verifyToken, isTeacher, addMarks);
router.put("/:id", verifyToken, isTeacher, updateMarks);

// Admin
router.get("/", verifyToken, isAdmin, getAllMarks);
router.delete("/:id", verifyToken, isAdmin, deleteMarks);

// Student
router.get("/student/:studentId", verifyToken, isStudent, getStudentMarks);

module.exports = router;