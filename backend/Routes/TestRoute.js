const express = require("express");

const router = express.Router();

const {
  verifyToken,
  isAdmin,
  isTeacher,
  isStudent,
} = require("../middleware/authMiddleware");

// Public Route
router.get("/", (req, res) => {
  res.json({
    message: "Public Route",
  });
});

// Admin Route
router.get("/admin", verifyToken, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome Admin",
    user: req.user,
  });
});

// Teacher Route
router.get("/teacher", verifyToken, isTeacher, (req, res) => {
  res.json({
    success: true,
    message: "Welcome Teacher",
    user: req.user,
  });
});

// Student Route
router.get("/student", verifyToken, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "Welcome Student",
    user: req.user,
  });
});

module.exports = router;