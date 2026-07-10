export default function ViewStudentModal({
  isOpen,
  onClose,
  student,
}) {
  if (!isOpen || !student) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-[600px] rounded-lg shadow-lg p-8">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Student Details
        </h2>

        <div className="space-y-4">

          <p><strong>Enrollment No:</strong> {student.enrollmentNo}</p>

          <p><strong>Name:</strong> {student.name}</p>

          <p><strong>Email:</strong> {student.email}</p>

          <p><strong>Phone:</strong> {student.phone}</p>

          <p><strong>Department:</strong> {student.department}</p>

          <p><strong>Semester:</strong> {student.semester}</p>

          <p><strong>Section:</strong> {student.section}</p>

        </div>

        <div className="flex justify-end mt-8">

          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
}