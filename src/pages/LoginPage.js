import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, LogIn } from 'lucide-react'; // Importing icons for email, password, and login button

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State for remember me checkbox

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where you would typically handle the login logic,
    // e.g., send the email and password to an authentication API.
    console.log('Login attempt:', { email, password, rememberMe });

    // In a real application, you would handle:
    // 1. API call to authenticate user
    // 2. Token storage (e.g., localStorage, sessionStorage)
    // 3. Redirection to dashboard or home page upon successful login
    // 4. Displaying error messages for failed login attempts
    alert('Login functionality is for demonstration. In a real app, this would authenticate with a backend.'); // Placeholder alert

    // Clear form fields after submission (optional, depending on desired behavior)
    // setEmail('');
    // setPassword('');
    // setRememberMe(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl dark:shadow-none dark:hover:shadow-xl dark:hover:shadow-indigo-500/20">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
          Welcome Back to <span className="text-indigo-600 dark:text-indigo-400">AerosVision</span>
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Sign in to access your personalized learning journey and continue your progress.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={20} className="text-gray-400 dark:text-gray-500" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email Address"
              />
            </div>
          </div>

          {/* Password Input Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={20} className="text-gray-400 dark:text-gray-500" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 block w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Password"
              />
            </div>
          </div>

          {/* Remember Me & Forgot Password Section */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:checked:bg-indigo-600 dark:focus:ring-offset-gray-800"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me" className="ml-2 block text-gray-900 dark:text-gray-300">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-200">
              Forgot your password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            <LogIn size={20} className="mr-2" />
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-200">
            Sign up now
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
