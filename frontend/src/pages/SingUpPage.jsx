import React from "react";

function SingUpPage() {
  return (
    <div className="justify-center flex m-36">
      <div className="justify-center grid text-2xl m-2 bg-gray-900 rounded-md p-3 ">
        <h1 className="font-bold text-3xl text-white my-2">Sign Up</h1>
        <label
          for="Name"
          class="block m-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Name
        </label>
        <input
          type="text"
          placeholder="Name"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2"
        />
        <label
          for="email"
          class="block m-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Email
        </label>
        <input
          type="email"
          placeholder="Email"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500  dark:focus:border-blue-500 my-2"
        />
        <label
          for="Password"
          class="block m-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500  dark:focus:border-blue-500 my-2"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 m-7 rounded-md">
          Sign Up
        </button>
        <div className="text-center italic text-white text-sm m-6">
          Already have an account?
          <a href="/login" className="text-red-700 hover:text-blue-500">
            &nbsp;Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default SingUpPage;
