import {
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa";

export default function StudentTable({
    students,
    onEdit,
    onDelete,
    onView,
}) {

  return (

    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-blue-600 text-white">

          <tr>

            <th className="p-4">Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Semester</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {students.map((student) => (

            <tr
              key={student._id}
              className="border-b hover:bg-gray-50"
            >

              <td className="p-3">
                <img
                  src={
                    student.photo ||
                    "https://ui-avatars.com/api/?name=" + student.name
                  }
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
              </td>

              <td>{student.name}</td>

              <td>{student.email}</td>

              <td>{student.department}</td>

              <td>{student.semester}</td>

              <td>

              <button
    onClick={() => onView(student)}
    className="text-blue-600 hover:text-blue-800 mr-3"
>
    <FaEye />
</button>

              <button
  onClick={() => onEdit(student)}
  className="text-green-600 mr-3 hover:text-green-800"
>
  <FaEdit />
</button>

             <button
  onClick={() => onDelete(student)}
  className="text-red-600 hover:text-red-800"
>
  <FaTrash />
</button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}