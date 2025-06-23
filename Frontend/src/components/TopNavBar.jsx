import { Link, useLocation } from "react-router-dom";

const TopNavBar = () => {
  const location = useLocation();

  const isActive = (tab) => location.pathname === tab;

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-10 relative">
      {/* Shield Icon - Absolutely positioned to far left */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
        <img src="/shield.png" alt="Logo" className="h-6 w-6" />
      </div>

      {/* Navigation container with max-width */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16">
        {/* Left side - Navigation Tabs */}
        <div className="flex items-center">
          {/* Spacer to account for shield */}
          <div className="w-12"></div>
          
          {/* Navigation Tabs */}
          <div className="flex space-x-6">
            <Link
              to="/"
              className={`flex items-center gap-2 font-medium transition-colors ${
                isActive("/") ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              Link Checker
            </Link>

            <Link
              to="/forum"
              className={`flex items-center gap-2 font-medium transition-colors ${
                isActive("/forum") ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2z"
                />
              </svg>
              Community Forum
            </Link>

            <Link
              to="/reality-mode"
              state={{ fromTab: "home" }}
              className={`flex items-center gap-2 font-medium transition-colors ${
                isActive("/reality-mode") ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2 16.5V15a5 5 0 015-5h10a5 5 0 015 5v1.5a2.5 2.5 0 01-5 0V15H7v1.5a2.5 2.5 0 01-5 0z"
                />
                <circle cx="8.5" cy="13" r="1" fill="currentColor" />
                <circle cx="15.5" cy="13" r="1" fill="currentColor" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10v.01M15 10v.01" />
              </svg>
              Reality Mode
            </Link>
          </div>
        </div>

        {/* Right side - Auth buttons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/aboutus"
            className="text-gray-500 hover:text-gray-700 font-medium transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/login"
            className="text-gray-500 hover:text-gray-700 font-medium transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;