import React from "react";
import { useState } from "react";
import axios from 'axios'
import "./login.css";
export const Register = () => {
  const url =import.meta.env.VITE_BACKEND_URL
  const [state,setState]=useState({
    fullname:'',
    username:'',
    email:'',
    password:'',
    avatar:'',
    coverImage:''
  })
  const handleChange=(e)=>{
     const {name,value}=e.target;
     setState({...state,[name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state);
    axios.post(`${url}/api/v1/users/register`,state).then(Response=>{
      console.log("form submitted successFully",Response)
    }).catch(err=>{
      console.log(err)
    })
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
          value={state.fullname}
          onChange={handleChange}
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
          value={state.username}
          onChange={handleChange}
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
          value={state.email}
          onChange={handleChange}
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
          value={state.password}
          onChange={handleChange}
        />

        <label for="avatar" className="text-gray-700">
          Upload Avatar
        </label>
        <input type="file" id="avatar" className="input" name="avatar" value={state.avatar} onChange={handleChange} />

        <label for="coverImage" className="text-gray-700">
          Upload Cover Image
        </label>
        <input
          type="file"
          id="coverImage"
          className="input"
          name="coverImage"
          value={state.coverImage}
          onChange={handleChange}
        />

        <button type="submit" className="btn bg-blue-600">
          Create
        </button>
      </form>
    </div>
  );
};
