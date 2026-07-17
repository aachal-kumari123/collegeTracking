import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Admin/Dashboad";
import Students from "../pages/Admin/Student";
import Teachers from "../pages/Admin/Teacher";

const ComingSoon = ({ title }) => (
  <h1 className="text-3xl font-bold p-6">{title} Page</h1>
);

export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}

      {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}
        <Route path="/" element={<Dashboard />} />
      <Route path="/admin/students" element={<Students />} />
      <Route path="/admin/teachers" element={<Teachers />} />

      <Route
        path="/admin/teachers"
        element={<ComingSoon title="Teachers" />}
      />

      <Route
        path="/admin/departments"
        element={<ComingSoon title="Departments" />}
      />

      <Route
        path="/admin/courses"
        element={<ComingSoon title="Courses" />}
      />

      <Route
        path="/admin/attendance"
        element={<ComingSoon title="Attendance" />}
      />

      <Route
        path="/admin/marks"
        element={<ComingSoon title="Marks" />}
      />

      <Route
        path="/admin/tasks"
        element={<ComingSoon title="Tasks" />}
      />

      <Route
        path="/admin/reports"
        element={<ComingSoon title="Reports" />}
      />

      <Route
        path="/admin/settings"
        element={<ComingSoon title="Settings" />}
      />
    </Routes>
  );
}
