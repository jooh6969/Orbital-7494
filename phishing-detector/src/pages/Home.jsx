import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-32 px-6 bg-white">
      <h1 className="text-[8rem] font-bold mb-6">Home Page</h1>
      <p className="text-4xl leading-relaxed mb-8">Welcome to the phishing detector.</p>
      <SearchBar />
    </div>
  );
};

export default Home;
