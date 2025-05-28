import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="p-4 bg-gray-800 text-white"
        onClick={() => setOpen(!open)}
      >
        ☰ Menu
      </button>

      {open && (
        <div
          className="fixed top-0 left-0 w-64 h-full bg-gray-100 shadow z-50 p-4"
          onClick={() => setOpen(false)} // click anywhere on sidebar to close
        >
          <nav className="flex flex-col gap-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/forum" className="hover:underline">
              Forum
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
