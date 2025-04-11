import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const MONGO_URI = import.meta.env.VITE_MONGO_URI;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post(`${MONGO_URI}/signup`, {
        Name: formData.name,
        Email: formData.email,
        Password: formData.password,
      });
      alert(response.data.message);
      navigate("/login");
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
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Your Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 mb-4"
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
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 mb-4"
        />

        {/* Password Input */}
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Your Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 mb-6"
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
