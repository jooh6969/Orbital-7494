import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-32 px-6 bg-white">
      <h1 className="text-[4rem] font-bold font-serif  mb-6">Home Page</h1>
      <p className="text-[2rem] font-monospace leading-relaxed mb-8">Welcome to the phishing detector.</p>
      <SearchBar />

      <div className="mt-16 flex gap-6">
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
        >
          Home
        </Link>
        <Link
          to="/forum"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
        >
          Forum
        </Link>
      </div>
    </div>
  );
};

export default Home;
