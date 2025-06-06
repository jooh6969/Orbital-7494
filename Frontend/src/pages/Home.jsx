import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-32 px-6 bg-white">
      <h1 className="text-[4rem] font-bold font-serif  mb-6">Home Page</h1>
      <p className="text-[2rem] font-mono leading-relaxed mb-8">Welcome to the phishing detector.</p>
      <SearchBar />

      <div className="mt-32 flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center items-center">
        <Link
          to="/"
          className="bg-blue-600 text-white px-10 py-5 rounded-xl text-xl font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-200 shadow-lg w-full sm:w-auto min-w-[150px] text-center"
        >
        Home
        </Link>
        <Link
          to="/forum"
          className="bg-blue-600 text-white px-10 py-5 rounded-xl text-xl font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-200 shadow-lg w-full sm:w-auto min-w-[150px] text-center"
        >
        Forum
        </Link>
      </div>
    </div>
  );
};

export default Home;
