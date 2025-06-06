import { Link } from "react-router-dom";

const Forum = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-start pt-16 px-6">
        <div className="text-center mb-12">
          <h1 className="text-6xl sm:text-7xl font-bold font-serif text-gray-900 mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Community Forum
          </h1>
          <p className="text-2xl sm:text-3xl font-mono leading-relaxed text-gray-700 max-w-4xl mx-auto">
            Feel free to flag out any potential phishing sites!
          </p>
        </div>

        {/* Forum Content Section */}
        <div className="w-full max-w-4xl mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Report Suspicious Websites
            </h2>
            <p className="text-gray-600 text-center text-lg">
              Help protect the community by sharing suspicious URLs and discussing phishing tactics.
            </p>
            {/* You can add forum content/posts here later */}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 justify-center items-center mb-16">
          <Link
            to="/"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-6 rounded-2xl text-2xl font-semibold hover:from-blue-700 hover:to-blue-800 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto min-w-[220px] text-center flex items-center justify-center gap-3"
          >
            Home
          </Link>
          <Link
            to="/forum"
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-12 py-6 rounded-2xl text-2xl font-semibold hover:from-purple-700 hover:to-purple-800 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto min-w-[220px] text-center flex items-center justify-center gap-3"
          >
            Chat Forum
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-lg">
            © 2025 Phishing Detector. Protecting users from malicious websites.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Forum;s
