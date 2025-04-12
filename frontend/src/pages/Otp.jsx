import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function OTPPage() {
  const [email, setEmail] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verfied, setVerification] = useState(false);

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit
  };

  const sendOTP = async () => {
    const otp = generateOTP();
    const expiry = Date.now() + 5 * 60 * 1000; // 5min

    // Save in localStorage
    localStorage.setItem("otp", otp);
    localStorage.setItem("otp_email", email);
    localStorage.setItem("otp_expiry", expiry.toString());

    try {
      const MONGO_URI = import.meta.env.VITE_MONGO_OTP_URI;
      await axios.post(`${MONGO_URI}`, {
        email,
        otp,
      });

      setOtpSent(true);

      alert("OTP sent to your email.");
    } catch (err) {
      console.error(err);
      alert("Failed to send OTP.");
    }
  };
  const navigate = useNavigate();
  const verifyOTP = () => {
    const storedOtp = localStorage.getItem("otp");
    const storedEmail = localStorage.getItem("otp_email");
    const expiry = parseInt(localStorage.getItem("otp_expiry"), 10);

    if (!storedOtp || !storedEmail || !expiry) {
      alert("No OTP found.");
      return;
    }

    if (Date.now() > expiry) {
      alert("OTP expired.");
      return;
    }

    if (email !== storedEmail) {
      alert("Email doesn't match the one used for OTP.");
      return;
    }

    if (userOtp === storedOtp) {
      setVerification(true);

      alert("OTP verified!");
      // You can now let the user sign up or whatever
    } else {
      alert("Incorrect OTP.");
    }
  };

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const resetPassword = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const MONGO_URI = import.meta.env.VITE_MONGO_URI; // Use the environment variable
      await axios.post(`${MONGO_URI}/reset-password`, {
        email,
        newPassword,
      });
      console.log("Email:", email);
      console.log("Password:", newPassword);

      alert("Password reset successfully!");
      navigate("/login"); // Redirect to login or any other page
    } catch (err) {
      console.error(err);
      alert("Failed to reset password.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-6 shadow-lg">
        <h1 className="font-bold text-3xl text-white text-center mb-6">
          Reset Password
        </h1>

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 mb-4"
        />
        {!verfied ? (
          <>
            {!otpSent ? (
              <button
                onClick={sendOTP}
                className="w-full bg-blue-600 text-white py-2 rounded"
              >
                Send OTP
              </button>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={userOtp}
                  onChange={(e) => setUserOtp(e.target.value)}
                  className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 mb-4"
                />

                <button
                  onClick={verifyOTP}
                  className="w-full bg-green-600 text-white py-2 rounded"
                >
                  Verify OTP
                </button>
              </>
            )}
          </>
        ) : (
          <form onSubmit={resetPassword}>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                New Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                value={newPassword} // Bind to newPassword state
                onChange={(e) => setNewPassword(e.target.value)} // Handle change
                class="bg-gray-50 border border-gray-300 text-gray-900 mt-2 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                for="confirm-password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password" // Change this line
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                value={confirmPassword} // Bind to the state
                onChange={(e) => setConfirmPassword(e.target.value)} // Handle change
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm mt-2 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg mb-6 transition duration-200"
            >
              Reset passwod
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default OTPPage;

