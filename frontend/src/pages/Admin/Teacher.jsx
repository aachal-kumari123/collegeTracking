import { useEffect, useState } from "react";
import api from "../../services/Api";
import AddTeacherModal from "../../components/AddTeacherModal";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const fetchTeachers = async () => {
    try {
      const res = await api.get("/teachers");
      setTeachers(res.data.teachers);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Teachers
        </h1>
<button
  onClick={() => setOpenModal(true)}
  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
>
  + Add Teacher
</button>

      </div>

      <div className="bg-white rounded-lg shadow p-6">

        {loading ? (
          <p>Loading...</p>
        ) : teachers.length === 0 ? (
          <p className="text-gray-500">
            No Teachers Found
          </p>
        ) : (
          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left p-3">Teacher ID</th>

                <th className="text-left p-3">Name</th>

                <th className="text-left p-3">Department</th>

                <th className="text-left p-3">Designation</th>

                <th className="text-left p-3">Actions</th>

              </tr>

            </thead>

            <tbody>

              {teachers.map((teacher) => (

                <tr key={teacher._id} className="border-b">

                  <td className="p-3">{teacher.teacherId}</td>

                  <td className="p-3">{teacher.name}</td>

                  <td className="p-3">{teacher.department}</td>

                  <td className="p-3">{teacher.designation}</td>

                  <td className="p-3">
                    👁️ ✏️ 🗑️
                  </td>

                </tr>

              ))}

            </tbody>

          </table>
        )}

      </div>
       <AddTeacherModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onTeacherAdded={fetchTeachers}
      />

    </div>
  );
}
