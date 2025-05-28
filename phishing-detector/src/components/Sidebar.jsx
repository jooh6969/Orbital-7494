import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        className="p-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
        onClick={() => setOpen(!open)}
      >
        ☰ Menu
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-80 h-full bg-gray-100 shadow-lg z-50 p-6 transition-all duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button (Optional) */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-6 mt-8">
          <Link
            to="/"
            className="text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-200 p-2 rounded transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/forum"
            className="text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-200 p-2 rounded transition-colors"
            onClick={() => setOpen(false)}
          >
            Forum
          </Link>
          {/* Add more links as needed */}
        </nav>
      </div>

      {/* Overlay (Optional) */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;