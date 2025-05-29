const Forum = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Community Forum
      </h1>
      <p className="text-lg text-gray-600">
        Feel free to flag out any potential phishing sites!
      </p>

       <div className="mt-8 flex gap-6">
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

export default Forum;
