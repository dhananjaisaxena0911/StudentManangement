import React from "react";

function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-6 shadow-lg">
        <h1 className="font-bold text-3xl text-white text-center mb-6">Sign Up</h1>
        
        {/* Name Input */}
        <label htmlFor="Name" className="block text-sm font-medium text-gray-300 mb-2">
          Your Name
        </label>
        <input
          type="text"
          placeholder="Name"
          className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
        />
        
        {/* Email Input */}
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Your Email
        </label>
        <input
          type="email"
          placeholder="Email"
          className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
        />
        
        {/* Password Input */}
        <label htmlFor="Password" className="block text-sm font-medium text-gray-300 mb-2">
          Your Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6"
        />
        
        {/* Sign Up Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg mb-6 transition duration-200">
          Sign Up
        </button>

        {/* Already have an account link */}
        <div className="text-center text-sm text-gray-300">
          Already have an account?
          <a href="/login" className="text-blue-500 hover:underline ml-1">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
