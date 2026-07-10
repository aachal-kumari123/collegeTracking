const Student = require("../models/Student");

// Add Student
exports.addStudent = async (req, res) => {
  try {

    const {
      enrollmentNo,
      name,
      email,
      phone,
      department,
      semester,
      section,
    } = req.body;

    const existingStudent = await Student.findOne({
      $or: [
        { enrollmentNo },
        { email },
      ],
    });

    if (existingStudent) {
      return res.status(400).json({
        success: false,
        message:
          "Student already exists with this Enrollment Number or Email",
      });
    }

    const student = await Student.create({
      enrollmentNo,
      name,
      email,
      phone,
      department,
      semester,
      section,
    });

    res.status(201).json({
      success: true,
      message: "Student Added Successfully",
      student,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get All Students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      success: true,
      students,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Student By ID
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student Not Found",
      });
    }

    res.status(200).json({
      success: true,
      student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Student
// Update Student
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Student Updated Successfully",
      student: updatedStudent,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Student
exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Student Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};