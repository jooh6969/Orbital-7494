import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Menu Toggle Button */}
      <button
        className="p-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
        onClick={() => setOpen(!open)}
      >
        ☰ Menu
      </button>

      {/* Sidebar Overlay (Darkens background when open) */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-white shadow-xl z-50 p-6 transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button (Fixed position, doesn't overlap) */}
        <button
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 text-2xl"
          onClick={() => setOpen(false)}
        >
          &times;
        </button>

        {/* Navigation Links (Properly spaced) */}
        <nav className="mt-12 flex flex-col gap-4">
          <Link
            to="/"
            className="block py-3 px-4 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/forum"
            className="block py-3 px-4 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setOpen(false)}
          >
            Forum
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;