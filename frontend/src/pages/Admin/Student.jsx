import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import StudentTable from "../../components/StudentTable";
import AddStudentModal from "../../components/AddStudentModal";
import api from "../../services/api";
import EditStudentModal from "../../components/EditStudentModal";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
const [openEditModal, setOpenEditModal] = useState(false);

  // Fetch Students
  const fetchStudents = async () => {
    try {
      setLoading(true);

      const res = await api.get("/students");

      setStudents(res.data.students || []);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleEdit = (student) => {
  setSelectedStudent(student);
  setOpenEditModal(true);
};

const handleDelete = async (student) => {
  const confirmDelete = window.confirm(
    `Are you sure you want to delete ${student.name}?`
  );

  if (!confirmDelete) return;

  try {
    await api.delete(`/students/${student._id}`);

    alert("Student Deleted Successfully");

    fetchStudents();

  } catch (error) {
    console.error(error);
    alert("Failed to delete student");
  }
};

  // Search Filter
  const filteredStudents = students.filter((student) =>
    student.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Students Management</h1>
          <p className="text-gray-500">
            Manage all students in one place
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          + Add Student
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <input
          type="text"
          placeholder="🔍 Search student by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Student Table */}
      {loading ? (
        <div className="text-center text-xl font-semibold">
          Loading Students...
        </div>
      ) : (
       <StudentTable
  students={filteredStudents}
  onEdit={handleEdit}
  onDelete={handleDelete}
/>
      )}

      {/* Add Student Modal */}
     <AddStudentModal
  isOpen={openModal}
  onClose={() => setOpenModal(false)}
  onStudentAdded={fetchStudents}
/>
<EditStudentModal
  isOpen={openEditModal}
  student={selectedStudent}
  onClose={() => setOpenEditModal(false)}
  onStudentUpdated={fetchStudents}
/>

    </AdminLayout>
  );
}