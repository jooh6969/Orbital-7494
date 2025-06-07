import { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await axios.post("https://phishing-backend-beh4.onrender.com/predict", {
        url: url.trim(),
      });
      setResult(response.data);
    } catch (err) {
      setError("Unable to analyze URL. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4"
      >
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your URL here"
          className="flex-1 px-6 py-4 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-nord-blue text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-blue-700 transition duration-150"
        >
          {loading ? "Checking..." : "Analyze"}
        </button>
      </form>

      {/* Error */}
      {error && (
        <div className="mt-4 text-red-600 text-sm text-left">
          {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="mt-6 p-6 border border-gray-200 rounded-lg bg-white text-left shadow-sm">
          <p className="text-base font-medium text-gray-800">
            Result: <span className="font-semibold">{result.result}</span>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Confidence: {result.confidence}%
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;


