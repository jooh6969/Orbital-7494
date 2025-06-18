import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Forum = () => {
  const location = useLocation();
  const activeTab = location.pathname;

  return (
    <div className="min-h-screen bg-nord-bg font-sans">
      <main className="flex flex-col items-center justify-start px-4 py-20 sm:py-32 max-w-xl mx-auto text-center">
        {/* Tabs with navigation */}
        <div className="flex mb-8">
          <Link
            to="/"
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors duration-200 border-b-2 ${
              activeTab === "/"
                ? "text-blue-600 border-blue-600"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
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
              activeTab === "/forum"
                ? "text-blue-600 border-blue-600"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2z"
              />
            </svg>
            Community Forum
          </Link>

          <Link
            to="/reality-mode"
            state={{ fromTab: "forum" }}
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors duration-200 border-b-2 ${
              activeTab === "/reality-mode"
                ? "text-blue-600 border-blue-600"
                : "text-gray-500 border-transparent hover:text-gray-700"
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

        {/* Forum Header */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
          Community Forum
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8">
          Feel free to flag any potential phishing sites. Help protect the community by sharing suspicious URLs.
        </p>

        {/* Forum Content Placeholder */}
        <div className="w-full bg-white rounded-lg shadow-lg p-6 border border-gray-200 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Flag Suspicious Websites
          </h2>
          <p className="text-gray-600 text-center text-lg mb-6">
            Encountered a commonly circulated phishing site? Share it with others here!
          </p>
          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <p className="text-gray-500">
              Forum posts and discussions will appear here... eventually.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-gray-400 text-center text-sm py-6">
        © 2025 Phishing Detector. We aim to catch suspicious websites.
      </footer>
    </div>
  );
};

export default Forum;

