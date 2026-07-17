import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";
export default function EditStudentModal({
  isOpen,
  onClose,
  student,
  onStudentUpdated,
}) {
  const [formData, setFormData] = useState({
    enrollmentNo: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    semester: "",
    section: "",
  });

  useEffect(() => {
    if (student) {
      setFormData({
        enrollmentNo: student.enrollmentNo || "",
        name: student.name || "",
        email: student.email || "",
        phone: student.phone || "",
        department: student.department || "",
        semester: student.semester || "",
        section: student.section || "",
      });
    }
  }, [student]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/students/${student._id}`, formData);

    toast.success("Student Updated Successfully");
      onStudentUpdated();
      onClose();
    } catch (error) {
      console.error(error);
     toast.error("Update Failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[600px]">

        <h2 className="text-2xl font-bold mb-4">
          Edit Student
        </h2>

        <form onSubmit={handleUpdate} className="space-y-3">

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Student Name"
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Department"
            className="w-full border p-3 rounded"
          />

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Update Student
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}