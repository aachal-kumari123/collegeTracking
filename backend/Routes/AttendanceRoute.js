const express = require("express");
const router = express.Router();

const {
  markAttendance,
  getAttendance,
  getStudentAttendance,
} = require("../controllers/attendanceController");

const {
  verifyToken,
  isTeacher,
  isStudent,
  isAdmin,
} = require("../middleware/authMiddleware");

// Teacher marks attendance
router.post("/", verifyToken, isTeacher, markAttendance);

// Admin views all attendance
router.get("/", verifyToken, isAdmin, getAttendance);

// Student views own attendance
router.get("/student/:studentId", verifyToken, isStudent, getStudentAttendance);

module.exports = router;