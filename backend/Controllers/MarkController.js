const Mark = require("../models/Mark");

// Add Marks
exports.addMarks = async (req, res) => {
  try {
    const mark = await Mark.create(req.body);

    res.status(201).json({
      success: true,
      message: "Marks Added Successfully",
      mark,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Marks
exports.getAllMarks = async (req, res) => {
  try {
    const marks = await Mark.find()
      .populate("student")
      .populate("subject")
      .populate("teacher");

    res.status(200).json({
      success: true,
      marks,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Student Marks
exports.getStudentMarks = async (req, res) => {
  try {
    const marks = await Mark.find({
      student: req.params.studentId,
    }).populate("subject");

    res.status(200).json({
      success: true,
      marks,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Marks
exports.updateMarks = async (req, res) => {
  try {
    const mark = await Mark.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Marks Updated Successfully",
      mark,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Marks
exports.deleteMarks = async (req, res) => {
  try {
    await Mark.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Marks Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};