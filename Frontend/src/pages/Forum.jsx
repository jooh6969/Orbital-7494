import { useState } from "react";
import { Link } from "react-router-dom";

const Forum = () => {
  const [activeTab, setActiveTab] = useState("forum");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        {/* Tab Navigation */}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Link Checker
          </Link>
          <button
            onClick={() => setActiveTab("forum")}
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors duration-200 border-b-2 ${
              activeTab === "forum"
                ? "text-blue-600 border-blue-600"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2z" />
            </svg>
            Forum
          </button>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
            Community Forum
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-8">
            Feel free to flag out any potential phishing sites! Help protect the community by sharing suspicious URLs and discussing phishing tactics.
          </p>
        </div>

        {/* Forum Content Section */}
        <div className="w-full max-w-2xl mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Report Suspicious Websites
            </h2>
            <p className="text-gray-600 text-center text-lg mb-6">
              Share and discuss potential phishing threats with the community.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-500 text-center">
                  Forum posts and discussions will appear here...eventually 
                </p>
              </div>
            </div>
          </div>
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

export default Forum;

