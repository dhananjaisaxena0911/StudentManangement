import React from "react";
import axios from "axios";


function SignUpPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const MONGO_URI = import.meta.env.VITE_MONGO_URI

  const handleSignUp = async () => {
    try {
      const response = await axios.post(`${MONGO_URI}/signup`, {
        Name: name,
        Email: email,
        Password: password
      });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-6 shadow-lg">
        <h1 className="font-bold text-3xl text-white text-center mb-6">
          Sign Up
        </h1>

        {/* Name Input */}
        <label
          htmlFor="Name"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Your Name
        </label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
        />

        {/* Email Input */}
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Your Email
        </label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
        />

        {/* Password Input */}
        <label
          htmlFor="Password"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Your Password
        </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6"
        />

        {/* Sign Up Button */}
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg mb-6 transition duration-200"
          onClick={handleSignUp}
        >
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
