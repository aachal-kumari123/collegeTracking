const express = require("express");
const router = express.Router();

const {
  addTeacher,
  getTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teacherController");

const {
  verifyToken,
  isAdmin,
} = require("../middleware/authMiddleware");

router.post("/", verifyToken, isAdmin, addTeacher);
router.get("/", verifyToken, isAdmin, getTeachers);
router.get("/:id", verifyToken, isAdmin, getTeacherById);
router.put("/:id", verifyToken, isAdmin, updateTeacher);
router.delete("/:id", verifyToken, isAdmin, deleteTeacher);

module.exports = router;