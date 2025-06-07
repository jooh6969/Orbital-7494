import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const Home = () => {
  const [activeTab, setActiveTab] = useState("link");

  return (
    <div className="min-h-screen bg-nord-bg font-sans">
      <main className="flex flex-col items-center justify-start px-4 py-20 sm:py-32 max-w-xl mx-auto text-center">
        {/* Tabs with navigation */}
        <div className="flex mb-8">
          <Link
            to="/"
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors duration-200 border-b-2 ${
              activeTab === "link"
                ? "text-blue-600 border-blue-600"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("link")}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            Link Checker
          </Link>
          <Link
            to="/forum"
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors duration-200 border-b-2 ${
              activeTab === "forum"
                ? "text-blue-600 border-blue-600"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("forum")}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2z"
              />
            </svg>
            Community Forum
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
          Is this link safe?
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8">
          Scan a URL you want to visit to detect malware, fake websites, and phishing attacks.
        </p>

        {/* Search bar */}
        <div className="w-full mb-8">
          <SearchBar />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-gray-400 text-center text-sm py-6">
        © 2025 Phishing Detector. Protecting users from malicious websites.
      </footer>
    </div>
  );
};

export default Home;

