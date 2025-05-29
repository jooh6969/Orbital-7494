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
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        url: url.trim(),
      });
      setResult(response.data);
    } catch (err) {
      setError("❌ Unable to analyze URL. Server might be down.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-12 max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-6 mb-10"
      >
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="🔗 Enter a URL to check"
          className="border border-gray-400 px-8 py-6 rounded text-[2rem] w-full shadow-md"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-6 rounded hover:bg-blue-700 text-[2rem] font-semibold shadow-md"
        >
          {loading ? "Checking..." : "Check URL"}
        </button>
      </form>

      {error && <p className="text-red-600 text-xl font-medium">{error}</p>}

      {result && (
        <div className="mt-8 p-8 border border-gray-300 rounded bg-gray-100 text-2xl shadow-sm">
          <p className="font-bold">
            🔍 <strong>Result:</strong> {result.result}
          </p>
          <p className="text-gray-700 mt-2 text-xl">
            Confidence: {result.confidence}%
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

