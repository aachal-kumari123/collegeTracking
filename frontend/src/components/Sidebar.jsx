import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBuilding,
  FaBook,
  FaClipboardCheck,
  FaClipboardList,
  FaTasks,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      path: "/admin/dashboard",
    },
    {
      name: "Students",
      icon: <FaUserGraduate />,
      path: "/admin/students",
    },
    {
      name: "Teachers",
      icon: <FaChalkboardTeacher />,
      path: "/admin/teachers",
    },
    {
      name: "Departments",
      icon: <FaBuilding />,
      path: "/admin/departments",
    },
    {
      name: "Courses",
      icon: <FaBook />,
      path: "/admin/courses",
    },
    {
      name: "Attendance",
      icon: <FaClipboardCheck />,
      path: "/admin/attendance",
    },
    {
      name: "Marks",
      icon: <FaClipboardList />,
      path: "/admin/marks",
    },
    {
      name: "Tasks",
      icon: <FaTasks />,
      path: "/admin/tasks",
    },
    {
      name: "Reports",
      icon: <FaChartBar />,
      path: "/admin/reports",
    },
    {
      name: "Settings",
      icon: <FaCog />,
      path: "/admin/settings",
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-blue-700 text-white flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-blue-600">
        <h1 className="text-2xl font-bold">
          🎓 College Tracker
        </h1>
      </div>

      {/* Menu */}
      <div className="flex-1 p-4">

        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg mb-2 transition-all ${
                isActive
                  ? "bg-white text-blue-700 font-semibold"
                  : "hover:bg-blue-600"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}

      </div>

      {/* Logout */}
      <div className="p-4 border-t border-blue-600">

        <button
          className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-red-600 transition"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>
  );
}