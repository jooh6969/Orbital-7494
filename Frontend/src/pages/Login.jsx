import { Link } from "react-router-dom";
import TopNavBar from "../components/TopNavBar";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // check against db here
    console.log("Login form submitted");
  };

  return (
    <div className="min-h-screen bg-nord-bg font-sans">
      <TopNavBar />
      
      <main className="flex flex-col items-center justify-start px-4 pt-24 pb-8 max-w-md mx-auto">
        <div className="w-full bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Login to Your Account
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                Forgot password?
              </Link>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Sign In
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:text-blue-500 font-medium">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </main>

      <footer className="text-gray-400 text-center text-sm py-6">
        © 2025 Phishing Detector. We aim to catch suspicious websites.
      </footer>
    </div>
  );
};

export default Login;