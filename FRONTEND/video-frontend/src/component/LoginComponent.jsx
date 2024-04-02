import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const LoginComponent = () => {
    const navigate =useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email:"",
    password: "",
  });
  const { register, handleSubmit } = useForm();

    const onSubmit = async(data) => {
        setFormData({
          username: data.username,
          email: data.email,
          password: data.password,
        });
        try {
            const response = await axios.post("http://localhost:8000/api/v1/users/login",formData);
            console.log(response);
          } catch (error) {
            console.log(error);
          }
        
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <Input
        type="text"
        placeholder="Enter your username"
        name="username"
        label="username"
        {...register("username", { required: true })}
      />
      <Input
        type="email"
        placeholder="Enter your email"
        name="email"
        label="email"
        {...register("email", { required: true })}
      />

      <Input
        type="password"
        placeholder="Enter your password"
        name="password"
        label="password"
        {...register("password", { required: true })}
      />
      <Button
        bgColor="bg-dark-1"
        textColor="text-light-1"
        type="submit"
        className="w-full"
      >
        Submit
      </Button>
    </form>
  );
};
