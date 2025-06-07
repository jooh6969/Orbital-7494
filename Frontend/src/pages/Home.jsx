import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const Home = () => {
  const [activeTab, setActiveTab] = useState("link");

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-6 sm:py-12 max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex mb-8">
          <button
            onClick={() => setActiveTab("link")}
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors duration-200 border-b-2 ${
              activeTab === "link"
                ? "text-nord-blue border-nord-blue"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Link Checker
          </button>
          <Link
            to="/forum"
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors duration-200 border-b-2 ${
              activeTab === "forum"
                ? "text-nord-blue border-nord-blue"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("forum")}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2z" />
            </svg>
            Community Forum
          </Link>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-800 tracking-tight leading-tight mb-6">
            Is this link safe?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Scan a dubious URL to detect malware, fake websites, and phishing attacks.
          </p>
        </div>

        {/* Search */}
        <div className="w-full max-w-2xl mb-12">
          <SearchBar />
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center">
          <Link
            to="/"
            className="bg-gradient-to-r from-nord-blue to-nord-darkBlue text-white px-10 py-4 rounded-xl text-lg font-semibold hover:scale-101 transition duration-150 shadow-md hover:shadow-lg w-full sm:w-auto min-w-[180px] text-center"
          >
            Home
          </Link>
          <Link
            to="/forum"
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:scale-101 transition duration-150 shadow-md hover:shadow-lg w-full sm:w-auto min-w-[180px] text-center"
          >
            Community Forum
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Phishing Detector. Protecting users from malicious websites.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
