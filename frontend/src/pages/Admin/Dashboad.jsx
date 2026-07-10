import AdminLayout from "../../layouts/AdminLayout";
import DashboardCard from "../../components/DashboardCard";

export default function Dashboard() {

  return (

    <AdminLayout>

      <div className="grid grid-cols-4 gap-5">

        <DashboardCard
          title="Students"
          value="250"
          color="bg-blue-600"
        />

        <DashboardCard
          title="Teachers"
          value="35"
          color="bg-green-600"
        />

        <DashboardCard
          title="Departments"
          value="8"
          color="bg-orange-500"
        />

        <DashboardCard
          title="Courses"
          value="12"
          color="bg-purple-600"
        />

        <DashboardCard
          title="Attendance"
          value="95%"
          color="bg-pink-600"
        />

        <DashboardCard
          title="Assignments"
          value="15"
          color="bg-red-600"
        />

        <DashboardCard
          title="Tasks"
          value="20"
          color="bg-cyan-600"
        />

        <DashboardCard
          title="Subjects"
          value="48"
          color="bg-yellow-500"
        />

      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-bold mb-4">
            Recent Activities
          </h2>

          <ul className="space-y-3">

            <li>✅ Rahul submitted Assignment</li>

            <li>✅ Attendance marked for CSE</li>

            <li>✅ New Student Registered</li>

            <li>✅ Teacher uploaded Marks</li>

            <li>✅ Department Added</li>

          </ul>

        </div>

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-bold mb-4">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <button className="bg-blue-600 text-white rounded-lg p-3">
              Add Student
            </button>

            <button className="bg-green-600 text-white rounded-lg p-3">
              Add Teacher
            </button>

            <button className="bg-orange-500 text-white rounded-lg p-3">
              Attendance
            </button>

            <button className="bg-purple-600 text-white rounded-lg p-3">
              Assignment
            </button>

          </div>

        </div>

      </div>

    </AdminLayout>

  );
}