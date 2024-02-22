import React, { useEffect } from "react";
import { useState } from "react";
// import { connect } from 'react-redux';
// import { fetchVideos,addVideo } from "../slices/videoSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`jdjd ${username}`);
  };



  return (
    <div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div class="bg-white w-96 max-w-full p-6 rounded-lg shadow-xl relative">
        <button
          class="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          aria-label="Close"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <h2 class="text-2xl font-semibold mb-4">Sign Up</h2>
        <form action="#" class="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label for="username" class="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              class="form-input mt-1 block w-full rounded-md border-gray-300"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label for="email" class="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              class="form-input mt-1 block w-full rounded-md border-gray-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label for="password" class="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              class="form-input mt-1 block w-full rounded-md border-gray-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              value="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};



export default Login