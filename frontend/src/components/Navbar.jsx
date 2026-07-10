import {
  FaBell,
  FaMoon,
  FaSearch,
} from "react-icons/fa";

export default function Navbar() {

  const today = new Date().toLocaleDateString();

  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-8">

      {/* Left */}

      <div>
        <h1 className="text-2xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 text-sm">
          {today}
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="flex items-center border rounded-lg px-3 py-2">

          <FaSearch className="text-gray-500"/>

          <input
            type="text"
            placeholder="Search..."
            className="outline-none ml-2"
          />

        </div>

        {/* Dark Mode */}

        <button className="text-xl">
          <FaMoon/>
        </button>

        {/* Notification */}

        <button className="relative">

          <FaBell className="text-2xl"/>

          <span
            className="absolute -top-2 -right-2
            bg-red-500 text-white rounded-full
            text-xs px-2"
          >
            3
          </span>

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3">

          <img
            src="https://ui-avatars.com/api/?name=Admin"
            alt="admin"
            className="w-10 h-10 rounded-full"
          />

          <div>

            <h3 className="font-semibold">
              Admin
            </h3>

            <p className="text-gray-500 text-sm">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}