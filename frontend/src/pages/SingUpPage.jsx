import React from "react";

function SingUpPage() {
  return (
    <div className="justify-center flex m-36">
      <div className="justify-center grid text-2xl m-2 bg-slate-400 w-96 rounded-md p-3">
        <h1 className="text-center font-bold text-3xl ">Sign Up</h1>
        <input
          type="text"
          placeholder="Name"
          className="border-2 my-3 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-2 my-3 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 my-3 rounded-md"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3">
          Sign Up
        </button>
        <div className="text-center italic">
          Already have an account? <a href="/login" className="text-blue-700 hover:text-blue-500">Login</a>
        </div>
      </div>
    </div>
  );
}

export default SingUpPage;
