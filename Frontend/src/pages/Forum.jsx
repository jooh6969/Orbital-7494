import { useLocation } from "react-router-dom";
import TopNavBar from "../components/TopNavBar";

const Forum = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-nord-bg font-sans">
      <TopNavBar />
      
      <main className="flex flex-col items-center justify-start px-4 pt-24 pb-8 max-w-xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
          Community Forum
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8">
          Feel free to flag any potential phishing sites. Help protect the community by sharing suspicious URLs.
        </p>

        {/* This is still a placeholder */}
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

