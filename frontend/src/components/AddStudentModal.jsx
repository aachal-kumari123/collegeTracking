import { useState } from "react";
import api from "../services/Api";
  import toast from "react-hot-toast";

export default function AddStudentModal({
  isOpen,
  onClose,
  onStudentAdded,
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

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "semester"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/students", formData);

      alert(res.data.message);

      setFormData({
        enrollmentNo: "",
        name: "",
        email: "",
        phone: "",
        department: "",
        semester: "",
        section: "",
      });

      if (onStudentAdded) {
        onStudentAdded();
      }

      onClose();

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed to add student"
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

      <div className="bg-white w-[700px] rounded-lg p-6">

        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">
            Add Student
          </h2>

          <button
            onClick={onClose}
            className="text-red-500 text-xl"
          >
            ✖
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-4"
        >

          <input
            type="text"
            name="enrollmentNo"
            placeholder="Enrollment Number"
            value={formData.enrollmentNo}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="number"
            name="semester"
            placeholder="Semester"
            value={formData.semester}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="text"
            name="section"
            placeholder="Section"
            value={formData.section}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <div className="col-span-2 flex justify-end gap-3 mt-4">

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-5 py-2 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded"
            >
              Save Student
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}
