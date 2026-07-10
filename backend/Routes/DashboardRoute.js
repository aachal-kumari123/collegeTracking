const express = require("express");

const router = express.Router();

const { getDashboardData } = require("../controllers/dashboardController");

const {
  verifyToken,
  isAdmin,
} = require("../middleware/authMiddleware");

router.get("/", verifyToken, isAdmin, getDashboardData);

module.exports = router;