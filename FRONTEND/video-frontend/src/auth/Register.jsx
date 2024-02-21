import React from "react";
import { useState } from "react";
import "./login.css";
export const Register = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    alert(username);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      <form
        action=""
        className="bg-white border border-gray-300 p-6 rounded-xl shadow-md max-w-lg"
        onSubmit={handleSubmit}
      >
        <label for="fullname" className="text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="fullname"
          className="input"
          placeholder="Enter your full name"
          name="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />

        <label for="username" className="text-gray-700">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="input"
          placeholder="Enter your username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label for="email" className="text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="input"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label for="password" className="text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="input"
          placeholder="Enter your password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label for="avatar" className="text-gray-700">
          Upload Avatar
        </label>
        <input type="file" id="avatar" className="input" name="avatar" />

        <label for="coverImage" className="text-gray-700">
          Upload Cover Image
        </label>
        <input
          type="file"
          id="coverImage"
          className="input"
          name="coverImage"
        />

        <button type="submit" className="btn bg-blue-600">
          Create
        </button>
      </form>
    </div>
  );
};
