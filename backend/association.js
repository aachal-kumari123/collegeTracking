// ===============================
// Import Models
// ===============================

const User = require("./Models/User");
const Student = require("./Models/Student");
const Teacher = require("./Models/Teacher");
const Department = require("./Models/Department");
const Course = require("./Models/Course");
const Subject = require("./Models/Subject");

// ======================================================
// USER ↔ STUDENT
// One User has One Student Profile
// ======================================================

User.hasOne(Student, {
    foreignKey: "userId",
    as: "student",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});

Student.belongsTo(User, {
    foreignKey: "userId",
    as: "user",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});

// ======================================================
// USER ↔ TEACHER
// One User has One Teacher Profile
// ======================================================

User.hasOne(Teacher, {
    foreignKey: "userId",
    as: "teacher",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});

Teacher.belongsTo(User, {
    foreignKey: "userId",
    as: "user",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});

// ======================================================
// DEPARTMENT ↔ STUDENT
// One Department has Many Students
// ======================================================

Department.hasMany(Student, {
    foreignKey: "departmentId",
    as: "students",
    onUpdate: "CASCADE",
    onDelete: "RESTRICT"
});

Student.belongsTo(Department, {
    foreignKey: "departmentId",
    as: "department",
    onUpdate: "CASCADE",
    onDelete: "RESTRICT"
});

// ======================================================
// DEPARTMENT ↔ TEACHER
// One Department has Many Teachers
// ======================================================

Department.hasMany(Teacher, {
    foreignKey: "departmentId",
    as: "teachers",
    onUpdate: "CASCADE",
    onDelete: "RESTRICT"
});

Teacher.belongsTo(Department, {
    foreignKey: "departmentId",
    as: "department",
    onUpdate: "CASCADE",
    onDelete: "RESTRICT"
});

// ======================================================
// DEPARTMENT ↔ COURSE
// One Department has Many Courses
// ======================================================

Department.hasMany(Course, {
    foreignKey: "departmentId",
    as: "courses",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});

Course.belongsTo(Department, {
    foreignKey: "departmentId",
    as: "department",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});

// ======================================================
// COURSE ↔ SUBJECT
// One Course has Many Subjects
// ======================================================

Course.hasMany(Subject, {
    foreignKey: "courseId",
    as: "subjects",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});

Subject.belongsTo(Course, {
    foreignKey: "courseId",
    as: "course",
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});

// ======================================================
// EXPORT MODELS
// ======================================================

module.exports = {
    User,
    Student,
    Teacher,
    Department,
    Course,
    Subject
};