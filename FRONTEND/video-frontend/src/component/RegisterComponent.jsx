import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {Input,Button,Loader} from './Index'
import {useForm} from 'react-hook-form'
const RegisterComponent = () => {
    const [error,setError]=useState("")
    const [avatar,setAvatar]=useState(null);
    const [coverImage,setCoverImage]=useState(null);
    const [fullname,setFullname]=useState("");
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const navigate =useNavigate();
    const {register,handleSubmit}=useForm();

  return (
    <div>
       <form action="">
        <div>
            <input type="file" name="coverImage"  />
            <input type="file" name='avatar' />
        </div>
        <div>
            <Input label="fullname" type="text" name='fullname' 
            {...register("fullname",{required:true})}/>
            <Input type="username" name='username'   {...register("username", { required: true })} />
            <Input label="email" type="email" name='email'   {...register("email", { required: true })}/>
            <Input label="password" type="password" name='password'   {...register("password", { required: true })}/>
        </div>
        <Button
                  bgColor="bg-dark-1"
                  textColor="text-light-1"
                  type="submit"
                  className="w-full">
                  Register
      </Button>
        </form>
    </div>
  )
}

export default RegisterComponent
