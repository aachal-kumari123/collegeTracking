const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
  {
    departmentName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    departmentCode: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },

    hod: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Department", departmentSchema);