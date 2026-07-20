import { useState } from "react";
import api from "../services/Api";
import toast from "react-hot-toast";

export default function AddTeacherModal({
  isOpen,
  onClose,
  onTeacherAdded,
}) {
  const [formData, setFormData] = useState({
    teacherId: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/teachers", formData);

      toast.success("Teacher Added Successfully");

      setFormData({
        teacherId: "",
        name: "",
        email: "",
        phone: "",
        department: "",
        designation: "",
      });

      onTeacherAdded();
      onClose();

    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to add teacher");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white w-[700px] rounded-lg p-6">

        <div className="flex justify-between mb-5">
          <h2 className="text-2xl font-bold">Add Teacher</h2>

          <button onClick={onClose}>✖</button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-4"
        >

          <input
            type="text"
            name="teacherId"
            placeholder="Teacher ID"
            value={formData.teacherId}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="text"
            name="name"
            placeholder="Teacher Name"
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
            type="text"
            name="designation"
            placeholder="Designation"
            value={formData.designation}
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
              Save Teacher
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}
