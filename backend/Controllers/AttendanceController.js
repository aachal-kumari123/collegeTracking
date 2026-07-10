const Attendance = require("../models/Attendence");

// Mark Attendance
exports.markAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.create(req.body);

    res.status(201).json({
      success: true,
      message: "Attendance Marked Successfully",
      attendance,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Attendance
exports.getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find()
      .populate("student")
      .populate("teacher")
      .populate("subject");

    res.status(200).json({
      success: true,
      attendance,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Student Attendance
exports.getStudentAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({
      student: req.params.studentId,
    }).populate("subject");

    res.status(200).json({
      success: true,
      attendance,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};