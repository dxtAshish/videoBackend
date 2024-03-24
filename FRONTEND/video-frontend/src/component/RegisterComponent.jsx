import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Loader } from "./Index";
import { useForm } from "react-hook-form";
import { loginSuccess } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const RegisterComponent = () => {
  const [error, setError] = useState("");
  const [avatarPrev, setAvatarPrev] = useState(null);
  const [coverImagePrev, setCoverImagePrev] = useState(null);


  const navigate = useNavigate();
  const { register, handleSubmit,formState: { errors }, } = useForm();

const dispatch=useDispatch();
  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("avatar", data.avatar[0]);
    formData.append("coverImage", data.coverImage[0] || "");
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("fullName", data.fullName);
    formData.append("password", data.password);

    try {
      const response = axios.post("http://localhost:8000/api/v1/users/register",formData);
      console.log(response);
      navigate("/");
      // dispatch(loginSuccess(response));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full h-32 relative border border-dark-1 rounded-lg p-[2px]">
                {coverImagePrev && (
                  <img
                    src={coverImagePrev}
                    alt="cover"
                    className="w-full h-full object-cover rounded-md"
                  />
                )}
                <label
                  htmlFor="coverImage"
                  className="absolute bottom-2 right-2 text-xs bg-dark-1 text-light-1 p-2 rounded-md flex items-center gap-1 cursor-pointer">
                  <input
                    type="file"
                    id="coverImage"
                    className="hidden"
                    {...register("coverImage", {
                      onChange: (e) =>
                        setCoverImagePrev(
                          URL.createObjectURL(e.target.files[0])
                        ),
                    })}
                  />
                 
                  <span>cover image</span>
                </label>
                <label
                  htmlFor="avatar"
                  className="w-24 h-24 absolute top-1/2 -translate-y-1/2 left-3 flex justify-center items-center border border-dark-1 rounded-full cursor-pointer p-[2px]">
                  {avatarPrev ? (
                    <img
                      src={avatarPrev}
                      alt="avatar"
                      className="rounded-full w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div>
                      
                    </div>
                  )}
                  <input
                    type="file"
                    id="avatar"
                    className="hidden"
                    accept="image/png,image/jpg,image/jpeg"
                    {...register("avatar", {
                      required: true,
                      onChange: (e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          setAvatarPrev(URL.createObjectURL(e.target.files[0]));
                        }
                      },
                    })}
                  />
                </label>
              </div>
              {errors.avatar && (
                <p className="text-red-dark text-xs -mt-2">
                  Avatar is required!
                </p>
              )}
        <div>
          <Input
            label="fullname"
            type="text"
            name="fullname"
            {...register("fullname", { required: true })}
          />
          <Input
            type="username"
            name="username"
            {...register("username", { required: true })}
          />
          <Input
            label="email"
            type="email"
            name="email"
            {...register("email", { required: true })}
          />
          <Input
            label="password"
            type="password"
            name="password"
            {...register("password", { required: true })}
          />
        </div>
        <Button
          bgColor="bg-dark-1"
          textColor="text-light-1"
          type="submit"
          className="w-full"
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterComponent;
