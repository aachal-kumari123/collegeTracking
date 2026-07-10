const express = require("express");
const router = express.Router();

const {
  addDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/departmentController");

const {
  verifyToken,
  isAdmin,
} = require("../middleware/authMiddleware");

router.post("/", verifyToken, isAdmin, addDepartment);
router.get("/", verifyToken, isAdmin, getDepartments);
router.put("/:id", verifyToken, isAdmin, updateDepartment);
router.delete("/:id", verifyToken, isAdmin, deleteDepartment);

module.exports = router;