const Teacher = require("../models/Teacher");

// Add Teacher
exports.addTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);

    res.status(201).json({
      success: true,
      message: "Teacher Added Successfully",
      teacher,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Teachers
exports.getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();

    res.status(200).json({
      success: true,
      teachers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Teacher By ID
exports.getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher Not Found",
      });
    }

    res.status(200).json({
      success: true,
      teacher,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Teacher
exports.updateTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Teacher Updated Successfully",
      teacher,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Teacher
exports.deleteTeacher = async (req, res) => {
  try {
    await Teacher.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Teacher Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};