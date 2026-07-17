import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import StudentTable from "../../components/StudentTable";
import AddStudentModal from "../../components/AddStudentModal";
import api from "../../services/api";
import EditStudentModal from "../../components/EditStudentModal";
import ViewStudentModal from "../../components/ViewStudentModal";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
 const [selectedStudent, setSelectedStudent] = useState(null);
const [openEditModal, setOpenEditModal] = useState(false);
const [viewStudent, setViewStudent] = useState(null);
const [openViewModal, setOpenViewModal] = useState(false);
const [departmentFilter, setDepartmentFilter] = useState("");
const [semesterFilter, setSemesterFilter] = useState("");

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

  const result = await Swal.fire({
    title: "Delete Student?",
    text: `Do you want to delete ${student.name}?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#dc2626",
    cancelButtonColor: "#2563eb",
    confirmButtonText: "Yes, Delete",
  });

  if (!result.isConfirmed) return;

  try {

    await api.delete(`/students/${student._id}`);

    toast.success("Student Deleted Successfully");

    fetchStudents();

  } catch (error) {

    console.log(error);

    toast.error("Failed to Delete Student");

  }

};

  // Search Filter
 const filteredStudents = students.filter((student) => {
  const matchName = student.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchDepartment =
    departmentFilter === "" ||
    student.department === departmentFilter;

  const matchSemester =
    semesterFilter === "" ||
    student.semester === Number(semesterFilter);

  return matchName && matchDepartment && matchSemester;
});


  const handleView = (student) => {
    setViewStudent(student);
    setOpenViewModal(true);
};

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
  <div className="grid grid-cols-3 gap-4">

    <input
      type="text"
      placeholder="🔍 Search Student..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border rounded-lg p-3"
    />

    <select
      value={departmentFilter}
      onChange={(e) => setDepartmentFilter(e.target.value)}
      className="border rounded-lg p-3"
    >
      <option value="">All Departments</option>
      <option value="CSE">CSE</option>
      <option value="IT">IT</option>
      <option value="ECE">ECE</option>
      <option value="EEE">EEE</option>
      <option value="ME">ME</option>
      <option value="CE">CE</option>
    </select>

    <select
      value={semesterFilter}
      onChange={(e) => setSemesterFilter(e.target.value)}
      className="border rounded-lg p-3"
    >
      <option value="">All Semesters</option>
      <option value="1">Semester 1</option>
      <option value="2">Semester 2</option>
      <option value="3">Semester 3</option>
      <option value="4">Semester 4</option>
      <option value="5">Semester 5</option>
      <option value="6">Semester 6</option>
      <option value="7">Semester 7</option>
      <option value="8">Semester 8</option>
    </select>

  </div>
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
    onView={handleView}
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

<ViewStudentModal
    isOpen={openViewModal}
    student={viewStudent}
    onClose={() => setOpenViewModal(false)}
/>

    </AdminLayout>
  );
}
