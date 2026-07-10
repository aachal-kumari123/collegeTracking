const express = require("express");
const cors = require("cors");

const authRoutes = require("./Routes/AuthRoute");
const testRoutes = require("./routes/TestRoute");
const studentRoutes = require("./routes/StudentRoutes");
const teacherRoutes = require("./routes/TeacherRoute");
const departmentRoutes = require("./routes/DepartmentRoute");
const attendanceRoutes = require("./routes/AttendanceRoute");
const markRoutes = require("./routes/MarkRoute");
const taskRoutes = require("./routes/TaskRoute");
const dashboardRoutes = require("./routes/DashboardRoute");





const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "College Student Tracking API Running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/marks", markRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/dashboard", dashboardRoutes);

module.exports = app;