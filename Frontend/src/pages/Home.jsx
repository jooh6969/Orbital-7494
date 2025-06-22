import { useState } from "react";
import SearchBar from "../components/SearchBar";
import TopNavBar from "../components/TopNavBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-nord-bg font-sans">
      <TopNavBar /> 

      <main className="flex flex-col items-center justify-start px-4 py-32 sm:py-40 max-w-xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
          Is this link safe?
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8">
          Scan a URL you want to visit to detect malware, fake websites, and phishing attacks.
        </p>

        <div className="w-full mb-8">
          <SearchBar />
        </div>
      </main>

      <footer className="text-gray-400 text-center text-sm py-6">
        © 2025 Phishing Detector. We aim to catch suspicious websites.
      </footer>
    </div>
  );
};

export default Home;


