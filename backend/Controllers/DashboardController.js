const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const Department = require("../models/Department");
const Course = require("../models/Course");
const Subject = require("../models/Subject");
const Attendance = require("../models/Attendence");
const Assignment = require("../models/Assignment");
const Task = require("../models/Task");

exports.getDashboardData = async (req, res) => {
  try {

    const totalStudents = await Student.countDocuments();

    const totalTeachers = await Teacher.countDocuments();

    const totalDepartments = await Department.countDocuments();

    const totalCourses = await Course.countDocuments();

    const totalSubjects = await Subject.countDocuments();

    const totalAttendance = await Attendance.countDocuments();

    const totalAssignments = await Assignment.countDocuments();

    const totalTasks = await Task.countDocuments();

    res.status(200).json({
      success: true,

      dashboard: {
        totalStudents,
        totalTeachers,
        totalDepartments,
        totalCourses,
        totalSubjects,
        totalAttendance,
        totalAssignments,
        totalTasks,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};